import React from 'react'

export const RenderTagHtml = ({ children, className }) => {

    return (
        <div className={className} dangerouslySetInnerHTML={{ __html: children }}></div>
    )
}
