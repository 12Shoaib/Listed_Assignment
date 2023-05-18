import {atom} from 'recoil'

export const loginStatus = atom({
    key:'loginStatus',
    default:false
})

export const hamburgerMenu = atom({
    key:'hamburgerMenu',
    default: true
})