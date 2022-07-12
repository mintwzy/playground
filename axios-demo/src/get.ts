import axios, {AxiosRequestConfig} from 'axios';

type User = {
    id: number;
    email: string;
    first_name: string;
}

type GetUserResponse = {
    data: User[];
}

const getUsers = async (): Promise<GetUserResponse | string> => {
    try {
        const url: string = 'https://reqres.in/api/users'
        const config: AxiosRequestConfig = {
            headers: {
                Accept: 'application/json'
            }
        }
        const {data, status}  = await axios.get<GetUserResponse>(url, config)

        console.log(JSON.stringify(data, null, 4))
        console.log(`response status is ${status}`)

        return data
    } catch (error) {
        if(axios.isAxiosError(error)) {
            console.log(`error message: ${error.message}`)
            return error.message
        } else {
            console.log('expected error: ', error)
            return 'An unexpected error occurred'
        }
    }
}

getUsers()