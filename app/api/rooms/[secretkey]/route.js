import axios from "axios";

export async function GET(req, { params }) {
    const secretkey = params.secretkey

    const { searchParams } = new URL(req.url);
  
    try {

        const units = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/unit-type?locationcode=${searchParams.get("locationcode")}&code=${searchParams.get("code")}`, {
            headers: {
                "x-api-key": secretkey
            }
        })

        let data = units.data.data


        return Response.json({ data })
    } catch (error) {
        return Response.json({ res: error })
    }

}