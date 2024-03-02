import axios from "axios";

export async function GET(req, { params }) {
    const secretkey = params.secretkey


    try {

        const resLoc = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/location`, {
            headers: {
                "x-api-key": secretkey
            }
        })

        let data = resLoc.data.data


        return Response.json({ data })
    } catch (error) {
        return Response.json({ res: error })
    }

}