import axios from "axios";

export async function GET(req, { params }) {
    const secretkey = params.secretkey


    try {

        const banner = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/banner`, {
            headers: {
                "x-api-key": secretkey
            }
        })

        let data = banner.data.data


        return Response.json({ data })
    } catch (error) {
        return Response.json({ res: error })
    }

}