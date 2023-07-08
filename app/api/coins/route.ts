import { NextResponse } from "next/server";

import axios from "axios";

const fetchCoins = async () => {
  const res = await axios.get<any>(
    "https://airbnb19.p.rapidapi.com/api/v1/test",
    {
      headers: {
        "X-RapidAPI-Key": "ee74358258mshfd05e3c7ac5c443p1b3096jsn613f93768ca8",
        "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
      },
    }
  );
  return res.data;
};

export async function GET() {
  const data = await fetchCoins();
  return NextResponse.json(data);
}
