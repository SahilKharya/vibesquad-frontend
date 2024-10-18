import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Handle GET requests for dynamic user ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        // Extract the dynamic 'id' from the URL
        const { id } = params;
        console.log(`Fetching data for user ID: ${id}`);

        // Make a GET request to the external API with the user ID
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, {
            timeout: 10000, // Timeout of 10 seconds
        });

        // Check if the response from the external API is successful
        if (!response.status.toString().startsWith('2')) {
            console.error('External API error:', response.status, response.data);
            return NextResponse.json({
                message: 'Failed to fetch user data',
                status: response.status,
                error: response.data,
            }, { status: response.status });
        }

        // Return the data from the external API response
        const data = response.data;
        return NextResponse.json(data, { status: 200 });
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data || error.message);
        } else if (error instanceof Error) {
            console.error('Error fetching user data:', error.message);
        } else {
            console.error('Unknown error:', error);
        }

        return NextResponse.json({ message: 'Internal server error', error: error.message || 'Unknown error' }, { status: 500 });
    }
}
