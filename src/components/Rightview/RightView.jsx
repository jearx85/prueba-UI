import React from 'react'

export default function RightView() {
  return (
    <div>
      <ul className="nav nav-tabs bg-dark border-bottom border-body" data-bs-theme="dark">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
        </ul>
    </div>
  )
}
