import React from 'react'

import { Picture } from './styles'

interface IProfilePicture {
    thumb: string
}

export default function ProfilePicture(props: IProfilePicture){
    return (
        <>
        <Picture src={props.thumb}/>
        </>
    )
}