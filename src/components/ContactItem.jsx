import React from 'react'
import { useSocket } from '../hooks/useChatContext'

export default function ContactItem({ user }) {

    const { setUserSelected } = useSocket()

    return (
        <li className="contacts-item friends" onClick={() => setUserSelected(user)}>
            <a className="contacts-link" href="#">
                <div className="avatar avatar-offline">
                    <img src={user.avatar} alt="" />
                </div>
                <div className="contacts-content">
                    <div className="contacts-info">
                        <h6 className="chat-name">{user.name}</h6>
                        <div className="chat-time">
                            <span>24/04/20</span>
                        </div>
                    </div>
                    <div className="contacts-texts">
                        <svg className="hw-20 text-muted" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                        </svg>
                        <p className="text-truncate">project_guidelines.docs</p>
                    </div>
                </div>
            </a>
        </li>
    )
}
