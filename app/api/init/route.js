import axios from "axios";

// export const dynamic = 'no-store'
export async function GET() {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/init?host=muarohouse.com`,
            // { cache: 'no-store' }
            {
                next: { revalidate: 1 }
            }
        );


        let responseJson = await response.json()

        return Response.json({ responseJson })
    } catch (error) {
        return Response.json({ res: error })
    }

}
