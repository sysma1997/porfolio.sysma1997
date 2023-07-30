import React from "react"

import "./index.scss"

const Footer = (props: {
    language: any
}) => {
    const { language } = props

    return <footer>
        <p dangerouslySetInnerHTML={{ __html: language.footer }} />
    </footer>
}

export { Footer }