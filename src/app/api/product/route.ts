import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        name: "Product 1",
        price: 1000,
    },
    {
        id: 2,
        name: "Product 2",
        price: 2000,
    },
];

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id));

        if (detailProduct) {
            return NextResponse.json({
                status: 200,
                message: "Success",
                data: detailProduct,
            });
        }

        return NextResponse.json(
            {
                status: 404,
                message: "Not Found",
            },
            { status: 404 }
        );
    }

    return NextResponse.json({
        status: 200,
        message: "Success",
        data,
    });
}
