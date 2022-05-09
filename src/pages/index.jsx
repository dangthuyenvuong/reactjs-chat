import React from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

export default function Home() {
    return (
        <div className="main-layout">
            <div className="navigation navbar navbar-light bg-primary">
                <a className="d-none d-xl-block bg-light rounded p-1" href="./../../index.html">
                    <svg height={30} width={30} viewBox="0 0 512 511"><g><path d="m120.65625 512.476562c-7.25 0-14.445312-2.023437-20.761719-6.007812-10.929687-6.902344-17.703125-18.734375-18.117187-31.660156l-1.261719-41.390625c-51.90625-46.542969-80.515625-111.890625-80.515625-183.992188 0-68.816406 26.378906-132.101562 74.269531-178.199219 47.390625-45.609374 111.929688-70.726562 181.730469-70.726562s134.339844 25.117188 181.730469 70.726562c47.890625 46.097657 74.269531 109.382813 74.269531 178.199219 0 68.8125-26.378906 132.097657-74.269531 178.195313-47.390625 45.609375-111.929688 70.730468-181.730469 70.730468-25.164062 0-49.789062-3.253906-73.195312-9.667968l-46.464844 20.5c-5.035156 2.207031-10.371094 3.292968-15.683594 3.292968zm135.34375-471.976562c-123.140625 0-216 89.816406-216 208.925781 0 60.667969 23.957031 115.511719 67.457031 154.425781 8.023438 7.226563 12.628907 17.015626 13.015625 27.609376l.003906.125 1.234376 40.332031 45.300781-19.988281c8.15625-3.589844 17.355469-4.28125 25.921875-1.945313 20.132812 5.554687 41.332031 8.363281 63.066406 8.363281 123.140625 0 216-89.816406 216-208.921875 0-119.109375-92.859375-208.925781-216-208.925781zm-125.863281 290.628906 74.746093-57.628906c5.050782-3.789062 12.003907-3.839844 17.101563-.046875l55.308594 42.992187c16.578125 12.371094 40.304687 8.007813 51.355469-9.433593l69.519531-110.242188c6.714843-10.523437-6.335938-22.417969-16.292969-14.882812l-74.710938 56.613281c-5.050781 3.792969-12.003906 3.839844-17.101562.046875l-55.308594-41.988281c-16.578125-12.371094-40.304687-8.011719-51.355468 9.429687l-69.554688 110.253907c-6.714844 10.523437 6.335938 22.421874 16.292969 14.886718zm0 0" data-original="#000000" className="active-path" data-old_color="#000000" fill="#665dfe" /></g> </svg>
                </a>

                <ul className="nav nav-minimal flex-row flex-grow-1 justify-content-between flex-xl-column justify-content-xl-center" id="mainNavTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link p-0 py-xl-3 active" id="chats-tab" href="#chats-content" title="Chats">
                            <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-0 py-xl-3 " id="calls-tab" href="#calls-content" title="Calls">
                            <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-0 py-xl-3" id="friends-tab" href="#friends-content" title="Friends">
                            <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-0 py-xl-3" id="profile-tab" href="#profile-content" title="Profile">
                            <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <Sidebar />


            <main className="main main-visible">

                <Chat />

                {/* <div className="calls px-0 py-2 p-xl-3">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col">
                                <div className="card card-bg-1 mb-3">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="avatar avatar-lg mb-3">
                                                <img className="avatar-img" src="./../../assets/media/avatar/2.png" alt="" />
                                            </div>
                                            <div className="d-flex flex-column align-items-center">
                                                <h5 className="mb-1">Catherine Richardson</h5>
                                                <p className="text-white rounded px-2 bg-primary">+01-202-265462</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-options">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                </svg>

                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Clear Call Log</a>
                                                <a className="dropdown-item" href="#">Block</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-closer d-xl-none">

                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-close>
                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row calls-log">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="avatar avatar-primary mr-2">
                                                <span>
                                                    <svg className="hw-24" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                    </svg>

                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <h6>Incoming Call</h6>
                                                <div className="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                                                    <p className="text-muted mb-0">Just now</p><span className="d-none d-sm-block text-muted mx-2">•</span>
                                                    <p className="text-muted mb-0">2m 35s</p>
                                                </div>
                                            </div>
                                            <div className="media-options ml-1 d-none d-sm-block">
                                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="avatar avatar-primary mr-2">
                                                <span>
                                                    <svg className="hw-24" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                    </svg>

                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <h6>Outgoing Call</h6>
                                                <div className="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                                                    <p className="text-muted mb-0">5 mins ago</p><span className="d-none d-sm-block text-muted mx-2">•</span>
                                                    <p className="text-muted mb-0">12m 25s</p>
                                                </div>
                                            </div>
                                            <div className="media-options ml-1 d-none d-sm-block">
                                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="avatar avatar-primary mr-2">
                                                <span>
                                                    <svg className="hw-24" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="text-danger">Missed Call</h6>
                                                <div className="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                                                    <p className="text-muted mb-0">18 mins ago</p>
                                                </div>
                                            </div>
                                            <div className="media-options ml-1 d-none d-sm-block">
                                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="avatar avatar-primary mr-2">
                                                <span>
                                                    <svg className="hw-24" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <h6>Outgoing Call</h6>
                                                <div className="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                                                    <p className="text-muted mb-0">Yesterday at 10:45PM</p><span className="d-none d-sm-block text-muted mx-2">•</span>
                                                    <p className="text-muted mb-0">25m 18s</p>
                                                </div>
                                            </div>
                                            <div className="media-options ml-1 d-none d-sm-block">
                                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="avatar avatar-primary mr-2">
                                                <span>
                                                    <svg className="hw-24" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <h6>Incoming Call</h6>
                                                <div className="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                                                    <p className="text-muted mb-0">16/05/2020 at 11:49AM</p><span className="d-none d-sm-block text-muted mx-2">•</span>
                                                    <p className="text-muted mb-0">0m 56s</p>
                                                </div>
                                            </div>
                                            <div className="media-options ml-1 d-none d-sm-block">
                                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="avatar avatar-primary mr-2">
                                                <span>
                                                    <svg className="hw-24" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <h6>Incoming Call</h6>
                                                <div className="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                                                    <p className="text-muted mb-0">14/05/2020 at 11:49AM</p><span className="d-none d-sm-block text-muted mx-2">•</span>
                                                    <p className="text-muted mb-0">24m 19s</p>
                                                </div>
                                            </div>
                                            <div className="media-options ml-1 d-none d-sm-block">
                                                <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="friends px-0 py-2 p-xl-3">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col">
                                <div className="card card-body card-bg-1 mb-3">
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="avatar avatar-lg mb-3">
                                            <img className="avatar-img" src="./../../assets/media/avatar/3.png" alt="" />
                                        </div>
                                        <div className="d-flex flex-column align-items-center">
                                            <h5 className="mb-1">Catherine Richardson</h5>

                                            <div className="d-flex mt-2">
                                                <div className="btn btn-primary btn-icon rounded-circle text-light mx-2">
                                                    <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                    </svg>
                                                </div>
                                                <div className="btn btn-success btn-icon rounded-circle text-light mx-2">
                                                    <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-options">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                </svg>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Remove</a>
                                                <a className="dropdown-item" href="#">Block</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-closer d-xl-none">
                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-close>
                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row friends-info">
                            <div className="col">
                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="small text-muted mb-0">Local Time</p>
                                                    <p className="mb-0">10:25 PM</p>
                                                </div>
                                                <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="small text-muted mb-0">Birthdate</p>
                                                    <p className="mb-0">20/11/1992</p>
                                                </div>
                                                <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="small text-muted mb-0">Phone</p>
                                                    <p className="mb-0">+01-222-364522</p>
                                                </div>
                                                <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="small text-muted mb-0">Email</p>
                                                    <p className="mb-0">catherine.richardson@gmail.com</p>
                                                </div>
                                                <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="small text-muted mb-0">Website</p>
                                                    <p className="mb-0">www.catherichardson.com</p>
                                                </div>
                                                <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>

                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="small text-muted mb-0">Address</p>
                                                    <p className="mb-0">1134 Ridder Park Road, San Fransisco, CA 94851</p>
                                                </div>
                                                <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="small text-muted mb-0">Facebook</p>
                                                    <a className="font-size-sm font-weight-medium" href="#">@cathe.richardson</a>
                                                </div>
                                                <svg className="text-muted hw-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="small text-muted mb-0">Twitter</p>
                                                    <a className="font-size-sm font-weight-medium" href="#">@cathe.richardson</a>
                                                </div>
                                                <svg className="text-muted hw-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="small text-muted mb-0">Instagram</p>
                                                    <a className="font-size-sm font-weight-medium" href="#">@cathe.richardson</a>
                                                </div>
                                                <svg className="text-muted hw-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="media-body">
                                                    <p className="small text-muted mb-0">Linkedin</p>
                                                    <a className="font-size-sm font-weight-medium" href="#">@cathe.richardson</a>
                                                </div>
                                                <svg className="text-muted hw-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect x={2} y={9} width={4} height={12} />
                                                    <circle cx={4} cy={4} r={2} />
                                                </svg>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile">
                    <div className="page-main-heading sticky-top py-2 px-3 mb-3">
                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted d-xl-none" type="button" data-close>
                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                        <div className="pl-2 pl-xl-0">
                            <h5 className="font-weight-semibold">Settings</h5>
                            <p className="text-muted mb-0">Update Personal Information &amp; Settings</p>
                        </div>
                    </div>
                    <div className="container-xl px-2 px-sm-3">
                        <div className="row">
                            <div className="col">
                                <div className="card mb-3">
                                    <div className="card-header">
                                        <h6 className="mb-1">Account</h6>
                                        <p className="mb-0 text-muted small">Update personal &amp; contact information</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <input type="text" className="form-control form-control-md" id="firstName" placeholder="Type your first name" defaultValue="Catherine" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <input type="text" className="form-control form-control-md" id="lastName" placeholder="Type your last name" defaultValue="Richardson" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="mobileNumber">Mobile number</label>
                                                    <input type="text" className="form-control form-control-md" id="mobileNumber" placeholder="Type your mobile number" defaultValue="+01-222-364522" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="birthDate">Birth date</label>
                                                    <input type="text" className="form-control form-control-md" id="birthDate" placeholder="dd/mm/yyyy" defaultValue="20/11/1992" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="emailAddress">Email address</label>
                                                    <input type="email" className="form-control form-control-md" id="emailAddress" placeholder="Type your email address" defaultValue="catherine.richardson@gmail.com" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="webSite">Website</label>
                                                    <input type="text" className="form-control form-control-md" id="webSite" placeholder="Type your website" defaultValue="www.catherichardson.com" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="Address">Address</label>
                                                    <input type="text" className="form-control form-control-md" id="Address" placeholder="Type your address" defaultValue="1134 Ridder Park Road, San Fransisco, CA 94851" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-end">
                                        <button type="button" className="btn btn-link text-muted mx-1">Reset</button>
                                        <button type="button" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-header">
                                        <h6 className="mb-1">Social network profiles</h6>
                                        <p className="mb-0 text-muted small">Update personal &amp; contact information</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="facebookId">Facebook</label>
                                                    <input type="text" className="form-control form-control-md" id="facebookId" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="twitterId">Twitter</label>
                                                    <input type="text" className="form-control form-control-md" id="twitterId" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="instagramId">Instagram</label>
                                                    <input type="text" className="form-control form-control-md" id="instagramId" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="linkedinId">Linkedin</label>
                                                    <input type="text" className="form-control form-control-md" id="linkedinId" placeholder="Username" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-end">
                                        <button type="button" className="btn btn-link text-muted mx-1">Reset</button>
                                        <button type="button" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-header">
                                        <h6 className="mb-1">Password</h6>
                                        <p className="mb-0 text-muted small">Update personal &amp; contact information</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="current-password">Current Password</label>
                                                        <input type="password" className="form-control form-control-md" id="current-password" placeholder="Current password" autoComplete="on" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="new-password">New Password</label>
                                                        <input type="password" className="form-control form-control-md" id="new-password" placeholder="New password" autoComplete="off" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="repeat-password">Repeat Password</label>
                                                        <input type="password" className="form-control form-control-md" id="repeat-password" placeholder="Repeat password" autoComplete="off" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer d-flex justify-content-end">
                                        <button type="button" className="btn btn-link text-muted mx-1">Reset</button>
                                        <button type="button" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-header">
                                        <h6 className="mb-1">Privacy</h6>
                                        <p className="mb-0 text-muted small">Update personal &amp; contact information</p>
                                    </div>
                                    <div className="card-body p-0">
                                        <ul className="list-group list-group-flush list-group-sm-column">
                                            <li className="list-group-item py-2">
                                                <div className="media align-items-center">
                                                    <div className="media-body">
                                                        <p className="mb-0">Profile Picture</p>
                                                        <p className="small text-muted mb-0">Select who can see my profile picture</p>
                                                    </div>
                                                    <div className="dropdown mr-2">
                                                        <button className="btn btn-outline-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Public
                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Public</a>
                                                            <a className="dropdown-item" href="#">Friends</a>
                                                            <a className="dropdown-item" href="#">Selected Friends</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item py-2">
                                                <div className="media align-items-center">
                                                    <div className="media-body">
                                                        <p className="mb-0">Last Seen</p>
                                                        <p className="small text-muted mb-0">Select who can see my last seen</p>
                                                    </div>
                                                    <div className="dropdown mr-2">
                                                        <button className="btn btn-outline-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Public
                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Public</a>
                                                            <a className="dropdown-item" href="#">Friends</a>
                                                            <a className="dropdown-item" href="#">Selected Friends</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item py-2">
                                                <div className="media align-items-center">
                                                    <div className="media-body">
                                                        <p className="mb-0">Groups</p>
                                                        <p className="small text-muted mb-0">Select who can add you in groups</p>
                                                    </div>
                                                    <div className="dropdown mr-2">
                                                        <button className="btn btn-outline-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Public
                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Public</a>
                                                            <a className="dropdown-item" href="#">Friends</a>
                                                            <a className="dropdown-item" href="#">Selected Friends</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item py-2">
                                                <div className="media align-items-center">
                                                    <div className="media-body">
                                                        <p className="mb-0">Status</p>
                                                        <p className="small text-muted mb-0">Select who can see my status updates</p>
                                                    </div>
                                                    <div className="dropdown mr-2">
                                                        <button className="btn btn-outline-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Public
                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Public</a>
                                                            <a className="dropdown-item" href="#">Friends</a>
                                                            <a className="dropdown-item" href="#">Selected Friends</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item py-2">
                                                <div className="media align-items-center">
                                                    <div className="media-body">
                                                        <p className="mb-0">Read receipts</p>
                                                        <p className="small text-muted mb-0">If turn off this option you won't be able to see read recipts</p>
                                                    </div>
                                                    <div className="custom-control custom-switch mr-2">
                                                        <input type="checkbox" className="custom-control-input" id="readReceiptsSwitch" defaultChecked />
                                                        <label className="custom-control-label" htmlFor="readReceiptsSwitch">&nbsp;</label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer d-flex justify-content-end">
                                        <button type="button" className="btn btn-link text-muted mx-1">Reset</button>
                                        <button type="button" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-header">
                                        <h6 className="mb-1">Security</h6>
                                        <p className="mb-0 text-muted small">Update personal &amp; contact information</p>
                                    </div>
                                    <div className="card-body p-0">
                                        <ul className="list-group list-group-flush list-group-sm-column">
                                            <li className="list-group-item py-2">
                                                <div className="media align-items-center">
                                                    <div className="media-body">
                                                        <p className="mb-0">Use two-factor authentication</p>
                                                        <p className="small text-muted mb-0">Ask for a code if attempted login from an unrecognised device or browser.</p>
                                                    </div>
                                                    <div className="custom-control custom-switch mr-2">
                                                        <input type="checkbox" className="custom-control-input" id="twoFactorSwitch" defaultChecked />
                                                        <label className="custom-control-label" htmlFor="twoFactorSwitch">&nbsp;</label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item py-2">
                                                <div className="media align-items-center">
                                                    <div className="media-body">
                                                        <p className="mb-0">Get alerts about unrecognised logins</p>
                                                        <p className="small text-muted mb-0">You will be notified if anyone logs in from a device or browser you don't usually use</p>
                                                    </div>
                                                    <div className="custom-control custom-switch mr-2">
                                                        <input type="checkbox" className="custom-control-input" id="unrecognisedSwitch" defaultChecked />
                                                        <label className="custom-control-label" htmlFor="unrecognisedSwitch">&nbsp;</label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer d-flex justify-content-end">
                                        <button className="btn btn-link text-muted mx-1">Reset</button>
                                        <button className="btn btn-primary" type="button">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </main>


            <div className="appbar">
                <div className="appbar-wrapper hide-scrollbar">

                    <div className="d-flex justify-content-center border-bottom w-100">
                        <button className="btn btn-secondary btn-icon m-0 btn-minimal btn-sm text-muted d-xl-none" type="button" data-apps-close>

                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>


                        </button>
                    </div>
                    <div className="appbar-head">

                        <svg className="hw-20" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>


                        <h6 className="mb-0 mt-1">Apps</h6>
                    </div>

                    <ul className="nav nav-minimal appbar-nav" id="appNavTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="translator-tab" data-toggle="tab" href="#translator" role="tab" aria-controls="translator" aria-selected="true">

                                <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="notes-tab" data-toggle="tab" href="#notes" role="tab" aria-controls="notes" aria-selected="false">

                                <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="todo-tab" data-toggle="tab" href="#todo" role="tab" aria-controls="todo" aria-selected="false">

                                <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="quick-settings-tab" data-toggle="tab" href="#quick-settings" role="tab" aria-controls="quick-settings" aria-selected="false">

                                <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </a>
                        </li>
                    </ul>

                </div>

                <div className="tab-content appnavbar-content">
                    <div className="tab-pane h-100 active" id="app-welcome" role="tabpanel">
                        <div className="appnavbar-content-wrapper">
                            <div className="d-flex flex-column justify-content-center text-center h-100 w-100">
                                <div className="container">
                                    <div className="avatar avatar-lg mb-2">
                                        <img className="avatar-img" src="./../../assets/media/avatar/4.png" alt="" />
                                    </div>
                                    <h5>Hey, Christina!</h5>
                                    <p className="text-muted">Please select a app to Start using it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane h-100" id="translator" role="tabpanel" aria-labelledby="translator-tab">
                        <div className="appnavbar-content-wrapper">
                            <div className="appnavbar-scrollable-wrapper">
                                <div className="appnavbar-heading sticky-top">
                                    <ul className="nav justify-content-between align-items-center">
                                        <li className="text-center">
                                            <h5 className="text-truncate mb-0">Translator</h5>
                                        </li>

                                        <li className="nav-item list-inline-item">
                                            <div data-appcontent-close>
                                                <svg className="hw-22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>

                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="appnavbar-body">
                                    <div className="appnavbar-body-title">
                                        <div className="dropdown w-100">
                                            <button className="btn btn-outline-default btn-block dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">English</button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">English</a>
                                                <a className="dropdown-item" href="#">Hindi</a>
                                                <a className="dropdown-item" href="#">Irish</a>
                                                <a className="dropdown-item" href="#">Latin</a>
                                                <a className="dropdown-item" href="#">Russian</a>
                                            </div>
                                        </div>
                                        <img className="injetable hw-16 text-muted mx-1" src="./../../assets/media/heroicons/outline/arrow-right.svg" alt="" />
                                        <div className="dropdown w-100">
                                            <button className="btn btn-outline-default btn-block dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Latin</button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">English</a>
                                                <a className="dropdown-item" href="#">Hindi</a>
                                                <a className="dropdown-item" href="#">Irish</a>
                                                <a className="dropdown-item" href="#">Latin</a>
                                                <a className="dropdown-item" href="#">Russian</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="translator-container p-2">
                                        <div className="form-group">
                                            <textarea className="form-control" rows={6} placeholder="Write text here" name="description" defaultValue={"Rise and shine, buddy! It’s time to show this world who you are. I hope your morning is filled with peace and harmony, and you are ready to start your day. Hope that you’re starting it with a smile!"} />
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="mb-0">Et surge inluminare buddy! Aliquam quis es ut ostenderet hoc mundo. Utinam impleatur concordiam mane et dies incipere velis. Spes autem quae erant incipiens cum risu!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="appnavbar-footer">
                                    <div className="btn btn-primary btn-block">Translate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane h-100" id="notes" role="tabpanel" aria-labelledby="notes-tab">
                        <div className="appnavbar-content-wrapper">
                            <div className="appnavbar-scrollable-wrapper">
                                <div className="appnavbar-heading sticky-top">
                                    <ul className="nav justify-content-between align-items-center">
                                        <li className="text-center">
                                            <h5 className="text-truncate mb-0">Notes</h5>
                                        </li>


                                        <li className="nav-item list-inline-item">
                                            <div data-appcontent-close>

                                                <svg className="hw-22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>


                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                <div className="appnavbar-body">
                                    <div className="appnavbar-body-title">

                                        <div className="dropdown mr-2">

                                            <button className="btn btn-outline-default dropdown-toggle" type="button" data-notes-filter-list data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Notes</button>


                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" data-notes-filter data-select="all-chats" href="#">All Notes</a>
                                                <a className="dropdown-item" data-notes-filter data-select="friends" href="#">Personal</a>
                                                <a className="dropdown-item" data-notes-filter data-select="groups" href="#">Work</a>
                                                <a className="dropdown-item" data-notes-filter data-select="unread" href="#">Favourite</a>
                                                <a className="dropdown-item" data-notes-filter data-select="archived" href="#">Important</a>
                                            </div>

                                        </div>


                                        <form className="form-inline">
                                            <div className="input-group">
                                                <input type="text" className="form-control search border-right-0 transparent-bg pr-0" placeholder="Search notes" />
                                                <div className="input-group-append">
                                                    <div className="input-group-text transparent-bg border-left-0" role="button">

                                                        <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                        </svg>


                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="note-container">
                                        <div className="note">
                                            <div className="note-body">
                                                <div className="note-added-on">Sunday, 20/12/2020 at 12:26 PM</div>
                                                <h5 className="note-title">Metting with John Doe</h5>
                                                <p className="note-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum odio vitae sapiente eius obcaecati.</p>
                                            </div>
                                            <div className="note-footer">
                                                <div className="note-tools">
                                                    <span className="badge badge-info">Personal</span>
                                                </div>
                                                <div className="note-tools">
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                                            <svg className="hw-20" xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                            </svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Personal</a>
                                                            <a className="dropdown-item" href="#">Work</a>
                                                            <a className="dropdown-item" href="#">Favourite</a>
                                                            <a className="dropdown-item" href="#">Important</a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="note">
                                            <div className="note-body">
                                                <div className="note-added-on">Sunday, 20/12/2020 at 12:26 PM</div>
                                                <h5 className="note-title">Metting with John Doe</h5>
                                                <p className="note-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum odio vitae sapiente eius obcaecati.</p>
                                            </div>
                                            <div className="note-footer">
                                                <div className="note-tools">
                                                    <span className="badge badge-danger">Important</span>
                                                </div>
                                                <div className="note-tools">
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                                            <svg className="hw-20" xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                            </svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Personal</a>
                                                            <a className="dropdown-item" href="#">Work</a>
                                                            <a className="dropdown-item" href="#">Favourite</a>
                                                            <a className="dropdown-item" href="#">Important</a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="note">
                                            <div className="note-body">
                                                <div className="note-added-on">Sunday, 20/12/2020 at 12:26 PM</div>
                                                <h5 className="note-title">Metting with John Doe</h5>
                                                <p className="note-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum odio vitae sapiente eius obcaecati.</p>
                                            </div>
                                            <div className="note-footer">
                                                <div className="note-tools">
                                                    <span className="badge badge-primary">Favourite</span>
                                                </div>
                                                <div className="note-tools">
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                                            <svg className="hw-20" xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                            </svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Personal</a>
                                                            <a className="dropdown-item" href="#">Work</a>
                                                            <a className="dropdown-item" href="#">Favourite</a>
                                                            <a className="dropdown-item" href="#">Important</a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="note">
                                            <div className="note-body">
                                                <div className="note-added-on">Sunday, 20/12/2020 at 12:26 PM</div>
                                                <h5 className="note-title">Metting with John Doe</h5>
                                                <p className="note-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum odio vitae sapiente eius obcaecati.</p>
                                            </div>
                                            <div className="note-footer">
                                                <div className="note-tools">
                                                    <span className="badge badge-warning">Work</span>
                                                </div>
                                                <div className="note-tools">
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                                            <svg className="hw-20" xmlns="http://www.w3.org/2000/svg" height={24} width={24} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                            </svg>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#">Personal</a>
                                                            <a className="dropdown-item" href="#">Work</a>
                                                            <a className="dropdown-item" href="#">Favourite</a>
                                                            <a className="dropdown-item" href="#">Important</a>
                                                            <div className="dropdown-divider" />
                                                            <a className="dropdown-item text-danger" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="appnavbar-footer">
                                    <div className="btn btn-primary btn-block" role="button" data-toggle="modal" data-target="#addNoteModal">Add new note</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane h-100" id="todo" role="tabpanel" aria-labelledby="todo-tab">
                        <div className="appnavbar-content-wrapper">
                            <div className="appnavbar-scrollable-wrapper">
                                <div className="appnavbar-heading sticky-top">
                                    <ul className="nav justify-content-between align-items-center">

                                        <li className="text-center">
                                            <h5 className="text-truncate mb-0">To-do List</h5>
                                        </li>


                                        <li className="nav-item list-inline-item">
                                            <div data-appcontent-close>

                                                <svg className="hw-22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>


                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                <div className="appnavbar-body">
                                    <div className="appnavbar-body-title">

                                        <div className="dropdown mr-2">

                                            <button className="btn btn-outline-default dropdown-toggle" type="button" data-tasks-filter-list data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Tasks</button>


                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" data-task-filter data-select="all-tasks" href="#">All Tasks</a>
                                                <a className="dropdown-item" data-task-filter data-select="active" href="#">Active</a>
                                                <a className="dropdown-item" data-task-filter data-select="finished" href="#">Finished</a>
                                            </div>

                                        </div>


                                        <form className="form-inline">
                                            <div className="input-group">
                                                <input type="text" className="form-control search border-right-0 transparent-bg pr-0" placeholder="Search notes" />
                                                <div className="input-group-append">
                                                    <div className="input-group-text transparent-bg border-left-0" role="button">

                                                        <svg className="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                        </svg>


                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="todo-container">
                                        <div className="todo-title">
                                            <h6 className="mb-0">20/07/2020</h6>
                                            <p className="text-muted">6 Task remaining</p>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <ul className="todo-list">
                                                    <li className="todo-item todo-task-done">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck1" defaultChecked />
                                                            <label className="custom-control-label" htmlFor="customCheck1">&nbsp;</label>
                                                        </div>
                                                        <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Dinner with friends</h6>
                                                    </li>
                                                    <li className="todo-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                            <label className="custom-control-label" htmlFor="customCheck2">&nbsp;</label>
                                                        </div>
                                                        <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Watching movie at 10:30PM</h6>
                                                    </li>
                                                    <li className="todo-item todo-task-done">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck3" defaultChecked />
                                                            <label className="custom-control-label" htmlFor="customCheck3">&nbsp;</label>
                                                        </div>
                                                        <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Watching a football match</h6>
                                                    </li>
                                                    <li className="todo-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                            <label className="custom-control-label" htmlFor="customCheck4">&nbsp;</label>
                                                        </div>
                                                        <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Coffie with girlfriend</h6>
                                                    </li>
                                                    <li className="todo-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                            <label className="custom-control-label" htmlFor="customCheck5">&nbsp;</label>
                                                        </div>
                                                        <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Meeting with design team</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="todo-title mt-2">
                                            <h6 className="mb-0">21/07/2020</h6>
                                            <p className="text-muted">6 Task remaining</p>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <ul className="todo-list">
                                                    <li className="todo-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                                            <label className="custom-control-label" htmlFor="customCheck6">&nbsp;</label>
                                                        </div>
                                                        <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Dinner with friends</h6>
                                                    </li>
                                                    <li className="todo-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                                            <label className="custom-control-label" htmlFor="customCheck7">&nbsp;</label>
                                                        </div>
                                                        <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Watching movie at 10:30PM</h6>
                                                    </li>
                                                    <li className="todo-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                                            <label className="custom-control-label" htmlFor="customCheck8">&nbsp;</label>
                                                        </div>
                                                        <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Watching a football match</h6>
                                                    </li>
                                                    <li className="todo-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck9" />
                                                            <label className="custom-control-label" htmlFor="customCheck9">&nbsp;</label>
                                                        </div>
                                                        <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Coffie with girlfriend</h6>
                                                    </li>
                                                    <li className="todo-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck10" />
                                                            <label className="custom-control-label" htmlFor="customCheck10">&nbsp;</label>
                                                        </div>
                                                        <h6 className="todo-title" data-toggle="modal" data-target="#taskModal">Meeting with design team</h6>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="appnavbar-footer">
                                    <div className="btn btn-primary btn-block" role="button" data-toggle="modal" data-target="#addTaskModal">Add new task</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                    }
                </div>
            </div>

            <div className="backdrop" />


            <div className="modal modal-lg-fullscreen fade" id="startConversation" tabIndex={-1} role="dialog" aria-labelledby="startConversationLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="startConversationLabel">New Chat</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body p-0 hide-scrollbar">
                            <div className="row">
                                <div className="col-12">

                                    <form className="form-inline w-100 p-2 border-bottom">
                                        <div className="input-group w-100 bg-light">
                                            <input type="text" className="form-control form-control-md search border-right-0 transparent-bg pr-0" placeholder="Search" />
                                            <div className="input-group-append">
                                                <div className="input-group-text transparent-bg border-left-0" role="button">

                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>


                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div className="col-12">

                                    <ul className="list-group list-group-flush">

                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="avatar avatar-online mr-2">
                                                    <img src="./../../assets/media/avatar/1.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset">Catherine Richardson</a>
                                                    </h6>
                                                    <p className="text-muted mb-0">Online</p>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="avatar avatar-online mr-2">
                                                    <img src="./../../assets/media/avatar/2.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset">Katherine Schneider</a>
                                                    </h6>
                                                    <p className="text-muted mb-0">Online</p>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="avatar avatar-offline mr-2">
                                                    <img src="./../../assets/media/avatar/3.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset">Brittany K. Williams</a>
                                                    </h6>
                                                    <p className="text-muted mb-0">Offline</p>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="avatar avatar-busy mr-2">
                                                    <img src="./../../assets/media/avatar/4.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate"><a href="#" className="text-reset">Christina Turner</a></h6>
                                                    <p className="text-muted mb-0">Busy</p>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="avatar avatar-away mr-2">
                                                    <img src="./../../assets/media/avatar/5.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate"><a href="#" className="text-reset">Annie Richardson</a></h6>
                                                    <p className="text-muted mb-0">Away</p>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal modal-lg-fullscreen fade" id="createGroup" tabIndex={-1} role="dialog" aria-labelledby="createGroupLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title js-title-step" id="createGroupLabel">&nbsp;</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body py-0 hide-scrollbar">
                            <div className="row hide pt-2" data-step={1} data-title="Create a New Group">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="groupName">Group name</label>
                                        <input type="text" className="form-control form-control-md" id="groupName" placeholder="Type group name here" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Choose profile picture</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="profilePictureInput" accept="image/*" />
                                            <label className="custom-file-label" htmlFor="profilePictureInput">Choose file</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group mb-0">
                                                <label>Group privacy</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group rounded p-2 border">
                                                <div className="custom-control custom-radio">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                                        Public group
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group rounded p-2 border">
                                                <div className="custom-control custom-radio">
                                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                                        Private group
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row hide pt-2" data-step={2} data-title="Add Group Members">
                                <div className="col-12 px-0">

                                    <form className="form-inline w-100 px-2 pb-2 border-bottom">
                                        <div className="input-group w-100 bg-light">
                                            <input type="text" className="form-control form-control-md search border-right-0 transparent-bg pr-0" placeholder="Search" />
                                            <div className="input-group-append">
                                                <div className="input-group-text transparent-bg border-left-0" role="button">

                                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>


                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div className="col-12 px-0">

                                    <ul className="list-group list-group-flush">

                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="avatar avatar-online mr-2">
                                                    <img src="./../../assets/media/avatar/1.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset">Catherine Richardson</a>
                                                    </h6>
                                                    <p className="text-muted mb-0">Online</p>
                                                </div>
                                                <div className="media-options">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" type="checkbox" defaultValue id="chx-user-1" defaultChecked />
                                                        <label className="custom-control-label" htmlFor="chx-user-1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="media-label" htmlFor="chx-user-1" />
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="avatar avatar-online mr-2">
                                                    <img src="./../../assets/media/avatar/2.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset">Katherine Schneider</a>
                                                    </h6>
                                                    <p className="text-muted mb-0">Online</p>
                                                </div>
                                                <div className="media-options">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" type="checkbox" defaultValue id="chx-user-2" defaultChecked />
                                                        <label className="custom-control-label" htmlFor="chx-user-2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="media-label" htmlFor="chx-user-2" />
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="avatar avatar-offline mr-2">
                                                    <img src="./../../assets/media/avatar/3.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset">Brittany K. Williams</a>
                                                    </h6>
                                                    <p className="text-muted mb-0">Offline</p>
                                                </div>
                                                <div className="media-options">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" type="checkbox" defaultValue id="chx-user-3" />
                                                        <label className="custom-control-label" htmlFor="chx-user-3" />
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="media-label" htmlFor="chx-user-3" />
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="avatar avatar-busy mr-2">
                                                    <img src="./../../assets/media/avatar/4.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate"><a href="#" className="text-reset">Christina Turner</a></h6>
                                                    <p className="text-muted mb-0">Busy</p>
                                                </div>
                                                <div className="media-options">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" type="checkbox" defaultValue id="chx-user-4" defaultChecked />
                                                        <label className="custom-control-label" htmlFor="chx-user-4" />
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="media-label" htmlFor="chx-user-4" />
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="avatar avatar-away mr-2">
                                                    <img src="./../../assets/media/avatar/5.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate"><a href="#" className="text-reset">Annie Richardson</a></h6>
                                                    <p className="text-muted mb-0">Away</p>
                                                </div>
                                                <div className="media-options">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" type="checkbox" defaultValue id="chx-user-5" />
                                                        <label className="custom-control-label" htmlFor="chx-user-5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="media-label" htmlFor="chx-user-5" />
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            <div className="row pt-2 h-100 hide" data-step={3} data-title="Finished">
                                <div className="col-12">
                                    <div className="d-flex justify-content-center align-items-center flex-column h-100">
                                        <div className="btn btn-success btn-icon rounded-circle text-light mb-3">

                                            <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>


                                        </div>
                                        <h6>Group Created Successfully</h6>
                                        <p className="text-muted text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque laborum fugiat vero pariatur provident!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-link text-muted js-btn-step mr-auto" data-orientation="cancel" data-dismiss="modal" />
                            <button type="button" className="btn btn-secondary  js-btn-step" data-orientation="previous" />
                            <button type="button" className="btn btn-primary js-btn-step" data-orientation="next" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal modal-lg-fullscreen fade" id="inviteOthers" tabIndex={-1} role="dialog" aria-labelledby="inviteOthersLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="inviteOthersLabel">Invite Others</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body hide-scrollbar">
                            <form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="inviteEmailAddress">Email address</label>
                                            <input type="email" className="form-control form-control-md" id="inviteEmailAddress" placeholder="Type email address here" defaultValue />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="inviteMessage">Invitation message</label>
                                            <textarea className="form-control form-control-md no-resize hide-scrollbar" id="inviteMessage" placeholder="Write your message here" rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-link text-muted" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send Invitation</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal modal-lg-fullscreen fade" id="notificationModal" tabIndex={-1} role="dialog" aria-labelledby="notificationModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="notificationModalLabel">Notifications</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body p-0 hide-scrollbar">
                            <div className="row">
                                <div className="col-12">

                                    <ul className="list-group list-group-flush  py-2">

                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">

                                                    <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                                    </svg>


                                                </div>
                                                <div className="media-body">
                                                    <h6>
                                                        <a href="#">Catherine richardson</a> send you a friend request
                                                    </h6>
                                                    <p className="text-muted mb-0">5 mins ago</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mt-2">
                                                <button type="button" className="btn btn-outline-danger mx-1">Reject</button>
                                                <button type="button" className="btn btn-primary mx-1">Accept</button>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">

                                                    <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>


                                                </div>
                                                <div className="media-body">
                                                    <h6>
                                                        <a href="#">Katelyn Valdez</a> accepted your friend request
                                                    </h6>
                                                    <p className="text-muted mb-0">25 mins ago</p>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">

                                                    <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>


                                                </div>
                                                <div className="media-body">
                                                    <h6>
                                                        <a href="#">Eva Walker</a> updated profile picture
                                                    </h6>
                                                    <p className="text-muted mb-0">5 mins ago</p>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">

                                                    <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>


                                                </div>
                                                <div className="media-body">
                                                    <h6>
                                                        <a href="#">Bonnie Torres</a> accepted your friend request
                                                    </h6>
                                                    <p className="text-muted mb-0">5 mins ago</p>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">

                                                    <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>


                                                </div>
                                                <div className="media-body">
                                                    <h6>
                                                        <a href="#">Christopher Garcia</a> updated profile picture
                                                    </h6>
                                                    <p className="text-muted mb-0">5 mins ago</p>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-link text-muted">Clear all</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal modal-lg-fullscreen fade" id="addNoteModal" tabIndex={-1} role="dialog" aria-labelledby="addNoteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addNoteModalLabel">Add new note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="addNoteName" className="col-form-label">Note title:</label>
                                    <input type="text" className="form-control" id="addNoteName" defaultValue placeholder="Add note title here" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="addNoteDetails" className="col-form-label">Note details:</label>
                                    <textarea className="form-control hide-scrollbar" id="addNoteDetails" rows={4} placeholder="Add note descriptions" defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">Note tag:</label>
                                    <select className="custom-select font-size-sm shadow-none">
                                        <option selected>Personal</option>
                                        <option value={1}>Important</option>
                                        <option value={2}>Work</option>
                                        <option value={3}>Favourite</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light border" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add task</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal modal-lg-fullscreen fade" id="taskModal" tabIndex={-1} role="dialog" aria-labelledby="taskModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="taskModalLabel">Edit task</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="editTaskName" className="col-form-label">Task name:</label>
                                    <input type="text" className="form-control" id="editTaskName" defaultValue="Dinner with friends" placeholder="Add task name here" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editTaskDetails" className="col-form-label">Task details:</label>
                                    <textarea className="form-control hide-scrollbar" id="editTaskDetails" rows={4} placeholder="Add task descriptions" defaultValue={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus vel, molestiae nobis dolor aut sapiente. Vero possimus molestias consequatur quod, quo rem autem molestiae, accusantium nemo culpa eos doloremque?\n                      "} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light border" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Finish</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal modal-lg-fullscreen fade" id="addTaskModal" tabIndex={-1} role="dialog" aria-labelledby="addTaskModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addTaskModalLabel">Add new task</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="addTaskName" className="col-form-label">Task name:</label>
                                    <input type="text" className="form-control" id="addTaskName" defaultValue placeholder="Add task name here" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="addTaskDetails" className="col-form-label">Task details:</label>
                                    <textarea className="form-control hide-scrollbar" id="addTaskDetails" rows={4} placeholder="Add task descriptions" defaultValue={""} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light border" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add task</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
