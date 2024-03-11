import axios from "axios";

export async function GET() {
    try {
        const resInit = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/init?host=muarohouse.com`)

        let data = resInit.data.data

        return Response.json({ data })
    } catch (error) {
        return Response.json({ res: error })
    }

}
