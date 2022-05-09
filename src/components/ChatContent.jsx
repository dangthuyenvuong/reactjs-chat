import React from 'react'
import { useId, useMessageSelected, useUserSelected } from '../hooks/useChatContext'
import Message from './Message'

export default function ChatContent() {
    const userSelected = useUserSelected()
    const id = useId()
    const message = useMessageSelected(userSelected?.socketId || '')
    console.log(message)
    return (
        <div className="chat-content p-2">
            <div className="container">

                <div className="message-day">
                    {/* <div className="message-divider sticky-top pb-2" data-label="Yesterday">&nbsp;</div> */}
                    {
                        message && (
                            message.messages.map((e, i) => <Message key={i} self={e.senderId === id} content={e.content}/>)
                        )
                    }
                    {/* <div className="message">
                        <div className="message-wrapper">
                            <div className="message-content">
                                <h6 className="text-dark">Brittany Williams</h6>
                                <span>Wow!  Today is October 30th! Halloween is tomorrow already!  Have you decided what you will be dressing up for Halloween yet, Sara?</span>
                            </div>
                        </div>
                        <div className="message-options">
                            <div className="avatar avatar-sm"><img src="/img/1.png" /></div>
                            <span className="message-date">9:12am</span>
                            <div className="dropdown">
                                <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>


                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="message self">
                        <div className="message-wrapper">
                            <div className="message-content"> I’m not sure what I want to be yet.  I want to be either a butterfly or a pumpkin.  But why do we dress up for Halloween?</div>
                        </div>
                        <div className="message-options">
                            <div className="avatar avatar-sm"><img src="/img/6.png" /></div>
                            <span className="message-date">9:12am</span>
                            <span className="message-status">Edited</span>
                            <div className="dropdown">
                                <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>


                                </a>
                            </div>
                        </div>
                    </div> */}


                    {/* <div className="message self">
                        <div className="message-wrapper">
                            <div className="message-content"> I’m not sure what I want to be yet.  I want to be either a butterfly or a pumpkin.  But why do we dress up for Halloween?</div>
                        </div>
                        <div className="message-options">
                            <div className="avatar avatar-sm"><img src="/img/6.png" /></div>
                            <span className="message-date">9:12am</span>
                            <span className="message-status">Edited</span>
                            <div className="dropdown">
                                <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>


                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>


                                        <span>Copy</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>


                                        <span>Edit</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Replay</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Forward</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>


                                        <span>Favourite</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center text-danger" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>


                                        <span>Delete</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="message">
                        <div className="message-wrapper">
                            <div className="message-content">
                                <h6 className="text-dark">Jacqueline James</h6>
                                <span>Halloween is a festival for children, and costumes make it more special. I think we have much more fun going from house to house asking for candies (trick-or-treating) after sunset dressed in our favourite costumes.</span>
                            </div>
                        </div>
                        <div className="message-options">
                            <div className="avatar avatar-sm"><img src="/img/7.png" /></div>
                            <span className="message-date">9:12am</span>
                            <div className="dropdown">
                                <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>


                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>


                                        <span>Copy</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Replay</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Forward</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>


                                        <span>Favourite</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center text-danger" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>


                                        <span>Delete</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="message">
                        <div className="message-wrapper">
                            <div className="message-content">
                                <h6 className="text-dark">Bonnie Torres</h6>
                                <span>Yes, I remember having a lot of fun last year when mom took me around in a bunny outfit. Do you know what you want to be yet, Patrick?</span>
                            </div>
                        </div>
                        <div className="message-options">
                            <div className="avatar avatar-sm"><img src="/img/2.png" /></div>
                            <span className="message-date">9:12am</span>
                            <div className="dropdown">
                                <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>


                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>


                                        <span>Copy</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Replay</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Forward</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>


                                        <span>Favourite</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center text-danger" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>


                                        <span>Delete</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="message self">
                        <div className="message-wrapper">
                            <div className="message-content">I want to be Batman!  I like wearing the cape and the mask.  I think you should be a butterfly.  You are so much shorter than me, and dressed in a pumpkin costume, someone might think you really are one and try to make a pie out of you.</div>
                        </div>
                        <div className="message-options">
                            <div className="avatar avatar-sm"><img src="/img/6.png" /></div>
                            <span className="message-date">9:12am</span>
                            <div className="dropdown">
                                <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>


                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>


                                        <span>Copy</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>


                                        <span>Edit</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Replay</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Forward</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>


                                        <span>Favourite</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center text-danger" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>


                                        <span>Delete</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="message">
                        <div className="message-wrapper">
                            <div className="message-content">
                                <h6 className="text-dark">Annie Richardson</h6>
                                <span>How could anyone mistake me for a real pumpkin?  Real pumpkins do not have a head or arms or legs.  But I suppose I will be a butterfly anyway.  I can have pretty wings.</span>
                            </div>
                        </div>
                        <div className="message-options">
                            <div className="avatar avatar-sm"><img src="/img/5.png" /></div>
                            <span className="message-date">9:12am</span>
                            <div className="dropdown">
                                <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>


                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>


                                        <span>Copy</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Replay</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Forward</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>


                                        <span>Favourite</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center text-danger" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>


                                        <span>Delete</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>


                {/* <div className="message-day">
                    <div className="message-divider sticky-top pb-2" data-label="Today">&nbsp;</div>

                    <div className="message self">
                        <div className="message-wrapper">
                            <div className="message-content">
                                <span>Great!  So you will be a butterfly and I will be Batman.  Let’s go ask Mom if we can go trick-or-treating tomorrow night by ourselves.  Although you are still young, I think I am old enough to watch over the both of us.</span>
                            </div>
                        </div>
                        <div className="message-options">
                            <div className="avatar avatar-sm"><img src="/img/6.png" /></div>
                            <span className="message-date">9:12am</span>
                            <span className="message-status">Edited</span>
                            <div className="dropdown">
                                <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>


                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>


                                        <span>Copy</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>


                                        <span>Edit</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Replay</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Forward</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>


                                        <span>Favourite</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center text-danger" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>


                                        <span>Delete</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="message">
                        <div className="message-wrapper">
                            <div className="message-content">
                                <h6 className="text-dark">Katherine Schneider</h6>
                                <span>OK, let’s go ask mom!</span>
                            </div>
                        </div>
                        <div className="message-options">
                            <div className="avatar avatar-sm"><img src="/img/4.png" /></div>
                            <span className="message-date">9:12am</span>
                            <div className="dropdown">
                                <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>


                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>


                                        <span>Copy</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Replay</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Forward</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>


                                        <span>Favourite</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center text-danger" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>


                                        <span>Delete</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="message self">
                        <div className="message-wrapper">
                            <div className="message-content">
                                <span>MOM!  Can Sara and I go trick-or-treating by ourselves tomorrow?  I can watch over Sara and make sure she stays out of trouble.</span>
                            </div>
                        </div>
                        <div className="message-options">
                            <div className="avatar avatar-sm"><img src="/img/6.png" /></div>
                            <span className="message-date">9:12am</span>
                            <div className="dropdown">
                                <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>


                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>


                                        <span>Copy</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>


                                        <span>Edit</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Replay</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Forward</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>


                                        <span>Favourite</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center text-danger" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>


                                        <span>Delete</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="message">
                        <div className="message-wrapper">
                            <div className="message-content">
                                <h6 className="text-dark">Gemma Mendez</h6>
                                <span>Yes, Mom.  If we go by ourselves, then you can stay home and relax.  You will not have to get cold waiting for us.</span>
                            </div>
                        </div>
                        <div className="message-options">
                            <div className="avatar avatar-sm"><img src="/img/3.png" /></div>
                            <span className="message-date">9:12am</span>
                            <div className="dropdown">
                                <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>


                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>


                                        <span>Copy</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Replay</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Forward</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>


                                        <span>Favourite</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center text-danger" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>


                                        <span>Delete</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="message self">
                        <div className="message-wrapper">
                            <div className="message-content">Thank you for offering, Patrick.  However, I will be worried and I will not be able to relax if you and your brother go by yourselves while I stay home.  Let me ask Christine or Ian if one of them can go with both of you.  Then I can stay home and relax.  Christine!  Ian!</div>
                        </div>
                        <div className="message-options">
                            <div className="avatar avatar-sm"><img src="/img/6.png" /></div>
                            <span className="message-date">9:12am</span>
                            <div className="dropdown">
                                <a className="text-muted" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                    <svg className="hw-18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                    </svg>


                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>


                                        <span>Copy</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>


                                        <span>Edit</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Replay</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 rotate-y mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>


                                        <span>Forward</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>


                                        <span>Favourite</span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center text-danger" href="#">

                                        <svg className="hw-18 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>


                                        <span>Delete</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}

            </div>

            <div className="chat-finished" id="chat-finished" />
        </div>
    )
}
