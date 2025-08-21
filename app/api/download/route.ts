import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { email, name, phone, company, position } = await request.json()

    // Supabase에 다운로드 요청 기록 (테이블이 있다면)
    // const { data, error } = await supabase
    //   .from('download_requests')
    //   .insert([
    //     { email, name, phone, company, position, downloaded_at: new Date() }
    //   ])

    // 여기서는 간단히 성공 응답만 반환
    return NextResponse.json({ 
      success: true, 
      message: '다운로드 요청이 처리되었습니다.',
      downloadUrl: '/application-form.pdf' 
    })
  } catch (error) {
    console.error('Download request error:', error)
    return NextResponse.json(
      { success: false, message: '다운로드 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // 직접 다운로드를 위한 GET 엔드포인트
  return NextResponse.json({ 
    downloadUrl: '/application-form.pdf',
    fileName: '부산디지털금융블록체인아카데미_입학원서.pdf'
  })
}