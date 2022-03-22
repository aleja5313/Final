import '@testing-library/jest-dom'
import { types } from '../types/types'

describe('Verificar types' ,() =>{
    it('comparar objetos',() =>{
        expect(types).toEqual({
            login: 'login',
            logout: 'logout',
            register: 'register',
            getUsers: 'getUsers',
            update: 'update',
            delete: 'delete'
        })

    })
}) 