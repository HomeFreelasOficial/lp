import React from 'react'

import { Picture } from './styles'

interface IProfilePicture {
    thumb: string
}

export default function ProfilePicture(props: IProfilePicture){

    console.log('profilePicture ' + props.thumb)

    return (
        <>
        <Picture src={props.thumb} alt="selecione uma imgaem"/>
        </>
    )
}