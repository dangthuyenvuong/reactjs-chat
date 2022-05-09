import ChatHeader from './ChatHeader'
import ChatContent from './ChatContent'
import ChatFooter from './ChatFooter'

export default function Chat() {
    return (
        <div className="chats">
            <div className="chat-body">
                <ChatHeader />
                <div className="collapse border-bottom px-3" id="searchCollapse">
                    <div className="container-xl py-2 px-0 px-md-3">
                        <div className="input-group bg-light ">
                            <input type="text" className="form-control form-control-md border-right-0 bg-transparent pr-0" placeholder="Search" />
                            <div className="input-group-append">
                                <span className="input-group-text bg-transparent border-left-0">
                                    <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <ChatContent />
                <ChatFooter />

            </div>
            {/* <div className="chat-info">
                <div className="d-flex h-100 flex-column">

                    <div className="chat-info-header px-2">
                        <div className="container-fluid">
                            <ul className="nav justify-content-between align-items-center">

                                <li className="text-center">
                                    <h5 className="text-truncate mb-0">Profile Details</h5>
                                </li>


                                <li className="nav-item list-inline-item">
                                    <a className="nav-link text-muted px-0" href="#" data-chat-info-close>
                                        <svg className="hw-22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <div className="hide-scrollbar flex-fill">

                        <div className="border-bottom text-center p-3">

                            <div className="avatar bg-success text-light avatar-xl mx-5 mb-3">
                                <span>
                                    <svg className="hw-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>

                                </span>
                            </div>

                            <h5 className="mb-1">Themeforest Group</h5>
                            <p className="text-muted d-flex align-items-center justify-content-center">
                                <svg className="mr-1 hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span>252 Participants</span>
                            </p>
                        </div>


                        <div className="chat-info-group">
                            <a className="chat-info-group-header" data-toggle="collapse" href="#participants-list" role="button" aria-expanded="true" aria-controls="participants-list">
                                <h6 className="mb-0">Group Participants</h6>
                                <svg className="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>

                            </a>
                            <div className="chat-info-group-body collapse show" id="participants-list">
                                <div className="chat-info-group-content list-item-has-padding">

                                    <ul className="list-group list-group-flush">

                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="avatar mr-2">
                                                    <img src="/img/1.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset">Catherine Richardson</a>
                                                    </h6>
                                                    <p className="text-muted mb-0">Product designer</p>
                                                </div>
                                                <div className="media-options ml-1">
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                            </svg>

                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Make admin</a>
                                                            <a className="dropdown-item" href="#">Remove from group</a>
                                                            <a className="dropdown-item" href="#">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="avatar mr-2">
                                                    <img src="/img/2.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset">Maizie Edwards</a>
                                                    </h6>
                                                    <p className="text-muted mb-0">Team leader</p>
                                                </div>
                                                <div className="media-options ml-1">
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                            </svg>

                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Make admin</a>
                                                            <a className="dropdown-item" href="#">Remove from group</a>
                                                            <a className="dropdown-item" href="#">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="avatar mr-2">
                                                    <img src="/img/3.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset">Brittany K. Williams</a>
                                                    </h6>
                                                    <p className="text-muted mb-0">UI/UX designer</p>
                                                </div>
                                                <div className="media-options ml-1">
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                            </svg>

                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Make admin</a>
                                                            <a className="dropdown-item" href="#">Remove from group</a>
                                                            <a className="dropdown-item" href="#">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="avatar mr-2">
                                                    <img src="/img/4.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset">Albert K. Johansen</a>
                                                    </h6>
                                                    <p className="text-muted mb-0">Sr. developer</p>
                                                </div>
                                                <div className="media-options ml-1">
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                            </svg>

                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Make admin</a>
                                                            <a className="dropdown-item" href="#">Remove from group</a>
                                                            <a className="dropdown-item" href="#">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="media align-items-center">
                                                <div className="avatar mr-2">
                                                    <img src="/img/5.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset">Christopher Garcia</a>
                                                    </h6>
                                                    <p className="text-muted mb-0">Project manager</p>
                                                </div>
                                                <div className="media-options ml-1">
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                            </svg>

                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Make admin</a>
                                                            <a className="dropdown-item" href="#">Remove from group</a>
                                                            <a className="dropdown-item" href="#">Block</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>


                        <div className="chat-info-group">
                            <a className="chat-info-group-header" data-toggle="collapse" href="#shared-media" role="button" aria-expanded="true" aria-controls="shared-media">
                                <h6 className="mb-0">Last Media</h6>

                                <svg className="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>


                            </a>
                            <div className="chat-info-group-body collapse show" id="shared-media">
                                <div className="chat-info-group-content">

                                    <div className="form-row">
                                        <div className="col-4 col-md-2 col-xl-4">
                                            <a href="#">
                                                <img src="/img/01.jpg" className="img-fluid rounded border" alt="" />
                                            </a>
                                        </div>
                                        <div className="col-4 col-md-2 col-xl-4">
                                            <a href="#">
                                                <img src="/img/02.jpg" className="img-fluid rounded border" alt="" />
                                            </a>
                                        </div>
                                        <div className="col-4 col-md-2 col-xl-4">
                                            <a href="#">
                                                <img src="/img/03.jpg" className="img-fluid rounded border" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="chat-info-group">
                            <a className="chat-info-group-header" data-toggle="collapse" href="#shared-files" role="button" aria-expanded="true" aria-controls="shared-files">
                                <h6 className="mb-0">Documents</h6>

                                <svg className="hw-20 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>


                            </a>
                            <div className="chat-info-group-body collapse show" id="shared-files">
                                <div className="chat-info-group-content list-item-has-padding">

                                    <ul className="list-group list-group-flush">

                                        <li className="list-group-item">
                                            <div className="document">
                                                <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">

                                                    <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                    </svg>


                                                </div>
                                                <div className="document-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset" title="effects-of-global-warming.docs">Effects-of-global-warming.docs</a>
                                                    </h6>
                                                    <ul className="list-inline small mb-0">
                                                        <li className="list-inline-item">
                                                            <span className="text-muted">79.2 KB</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="text-muted text-uppercase">docs</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="document-options ml-1">
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                            </svg>


                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Download</a>
                                                            <a className="dropdown-item" href="#">Share</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="document">
                                                <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">

                                                    <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                    </svg>


                                                </div>
                                                <div className="document-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset" title="global-warming-data-2020.xlxs">Global-warming-data-2020.xlxs</a>
                                                    </h6>
                                                    <ul className="list-inline small mb-0">
                                                        <li className="list-inline-item">
                                                            <span className="text-muted">79.2 KB</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="text-muted text-uppercase">xlxs</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="document-options ml-1">
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                            </svg>


                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">View</a>
                                                            <a className="dropdown-item" href="#">Share</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>


                                        <li className="list-group-item">
                                            <div className="document">
                                                <div className="btn btn-primary btn-icon rounded-circle text-light mr-2">

                                                    <svg className="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                    </svg>


                                                </div>
                                                <div className="document-body">
                                                    <h6 className="text-truncate">
                                                        <a href="#" className="text-reset" title="great-presentation-on global-warming-2020.ppt">Great-presentation-on global-warming-2020.ppt</a>
                                                    </h6>
                                                    <ul className="list-inline small mb-0">
                                                        <li className="list-inline-item">
                                                            <span className="text-muted">79.2 KB</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="text-muted text-uppercase">ppt</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="document-options ml-1">
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                                            <svg className="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                            </svg>


                                                        </button>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Download</a>
                                                            <a className="dropdown-item" href="#">Share</a>
                                                            <a className="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div> */}

        </div>
    )
}
