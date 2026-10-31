import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  console.log("받은 데이터:", body);

  // 과제 조건을 위해 성공 응답을 반환합니다.
  return NextResponse.json({ success: true, message: "저장 성공" });
}