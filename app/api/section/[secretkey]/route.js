import axios from "axios";

export async function GET(req, { params }) {
    const secretkey = params.secretkey


    try {

        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/section`, {
            headers: {
                "x-api-key": secretkey
            }
        })

        let data = res.data.data

        // console.log(data)

        return Response.json({ data })
    } catch (error) {
        return Response.json({ res: error })
    }

}