import React, { useEffect } from 'react'
import Footer from '../components/Footer'

import { client } from '../lib/client';

const SubmitInfo = () => {

  useEffect(() => {

    if (typeof window == 'undefined') return;

    const dropbox = document.querySelector('.dropbox');
    const handleFiles = files => {
      // empty the dropbox
      while (dropbox.firstChild) {
        dropbox.removeChild(dropbox.firstChild);
      }

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith('image')) {
          alert(`${file.name} is not supported because it is of type ${file.type}.`);
          continue;
        }
        const imgElement = document.createElement('img');
        imgElement.file = file;
        imgElement.className = 'h-24 m-2 inline';
        dropbox.appendChild(imgElement);

        let reader = new FileReader();

        // reader.onload = () => {
        //   imgElement.src = reader.result;
        // }

        reader.onload = (function (aImg) {
          return function (e) {
            aImg.src = e.target.result;
          };
        })(imgElement);

        reader.readAsDataURL(file);
      }
    }

    dropbox.addEventListener('dragenter', (event) => {
      event.target.classList.add('border-indigo-500');
    })
    dropbox.addEventListener('dragover', (event) => {
      event.preventDefault();
      event.stopPropagation();
    })
    dropbox.addEventListener('dragleave', (event) => {
      event.target.classList.remove('border-indigo-500');
    })
    dropbox.addEventListener('drop', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const files = event.dataTransfer.files;
      handleFiles(files);
    })

    const fileUpload = document.querySelector('#file-upload');
    fileUpload.addEventListener('change', (event) => {
      const files = event.target.files;
      handleFiles(files);
    })


  }, [])


  const submitForm = async (event) => {
    event.preventDefault();

    let imgAssetsArray = [];

    const images = document.querySelector('.dropbox').childNodes;
    for (const img of images) {

      const imgAsset = await client.assets.upload('image', img.file, {
        filename: img.file.name
      });
      imgAssetsArray.push({
        _type: 'image',
        _key: imgAsset._id,      // not a good way, but it works
        asset: {
          _type: 'reference',
          _ref: imgAsset._id
        }
      })
    }


    let image = imgAssetsArray;
    let name = document.querySelector('#firstName').value + " " + document.querySelector('#lastName').value;
    let rollno = document.querySelector('#rollNumber').value;
    let slug = {
      _type: 'slug',
      current: rollno.toLowerCase()
    }
    let description = document.querySelector('#about').value.split('\n');
    // let gender = '';
    let phone_number = parseInt(document.querySelector('#phoneNumber').value);
    // let email = '';
    // let tags = '';
    let room_no = parseInt(document.querySelector('#roomNumber').value);
    let linkedinProfile = document.querySelector('#linkedinProfile').value;
    let branch = document.querySelector('#branch').value;
    let year = document.querySelector('#year').value;


    const student = {
      _type: 'student',
      image, name, rollno, slug, phone_number, room_no, description
    };
    console.log(student)


    // const file = new File(['foo'], 'foo.txt', {
    //   type: 'text/plain'
    // })
    // client.assets
    // .upload('file', file)
    // .then(document => {
    //   console.log(`${document} uploaded successfully :)`);
    // })
    // .catch (error => {
    //   console.log('Upload failed: ', error);
    // })
    // console.log(data)


    // CREATE DOCUMENT
    client
      .create(student)
      .then((res) => {
        console.log(`Student was created, document ID is ${res._id}`)
      })
      .catch(error => {
        console.log('Error creating doccument:', error);
      })

    // // UPDATE DOCUMENT
    // client
    // .patch('ua2B64HnO6Bb4Ci1L1803v')
    // .set({
    //   slug: 'lit2021024',
    //   gender: 'Male',
    //   phone_number: '9305680096',
    // })
    // .commit()
    // .then(updatedStudent => {
    //   console.log('Update successfull', updatedStudent);
    // })
    // .catch(error => {
    //   console.log(error);
    // })
  }
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg mx-7 mt-7 font-medium leading-6 text-gray-900">Profile</h3>
              <p className="mt-1 mx-7 text-sm text-gray-600">
                This information will be displayed publicly so be careful what you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-5 mr-5 md:col-span-2">
            <form action="http://localhost:3000/api/submitInfo" method="POST">
              <div className="shadow-md rounded-t-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className='grid grid-cols-2 gap-6'>
                    <input
                      type="text"
                      id='firstName'
                      name="firstName"
                      placeholder='First Name'
                      className="inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm w-full"
                      required
                    />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder='Last Name'
                      className="inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm w-full"
                    />
                  </div>
                  <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700">
                    Roll Number
                  </label>
                  <input
                    type="text"
                    id="rollNumber"
                    name="rollNumber"
                    placeholder="LXX20XX0XX"
                    className="inline-flex items-center px-3 rounded-md border border-gray-300 text-gray-500 text-sm w-full"
                  />
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          +91
                        </span>
                        <input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-1 rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="000-000-0000"
                        />
                      </div>
                    </div>
                    <div className=''>
                      <label htmlFor='roomNumber' className='block text-sm font-medium text-gray-700'>
                        Room Number
                      </label>
                      <input
                        type='text'
                        className='rounded-md mt-1 shadow border border-gray-300 text-gray-600 w-32 text-sm'
                        placeholder='000'
                        id='roomNumber'
                        name='roomNumber'
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      About
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Hello, I am..."
                        defaultValue={''}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile. Do list your achievements here.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="linkedinProfile" className="block text-sm font-medium text-gray-700">
                        LinkedIn Profile
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          https://www.linkedin.com/in/
                        </span>
                        <input
                          type="text"
                          name="linkedinProfile"
                          id="linkedinProfile"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-1 rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="first-last-12345"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-700">Profile Photo</label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Change
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Your photos gallery</label>


                    {/* DROPBOX */}
                    <div className="dropbox my-4 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="dropbox-children space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true" > <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </svg>
                        <div className="text-sm max-w-full text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload photos</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                          </label>
                          <p className="text-xs text-gray-500">Photos don&apos;t need to be formal, but keep in mind that they are <strong>public</strong></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 mt-5 mx-1 max-w-full sm:col-span-3">
                      <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
                        Branch
                      </label>
                      <select
                        id="branch"
                        name="branch"
                        autoComplete="branch-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Information Technology</option>
                        <option>Computer Science</option>
                        <option>Computer Science & Artificial Intelligence</option>
                        <option>Computer Science & Business</option>
                      </select>
                    </div>
                    <div className='col-span-6 mt-5 mx-1 mb-2 max-w-full sm:col-span-3'>
                      <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                        Year
                      </label>
                      <select
                        id="year"
                        name="year"
                        autoComplete="year-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-5 bg-gray-50 border rounded-b-xl text-right sm:px-6">
                <button
                  type="submit"
                  onClick={submitForm}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default SubmitInfo