import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name, phone, company, position, message } = body

    // Supabase에 문의 내용 저장 (테이블이 있다면)
    // const { data, error } = await supabase
    //   .from('inquiries')
    //   .insert([
    //     { 
    //       email, 
    //       name, 
    //       phone, 
    //       company, 
    //       position, 
    //       message,
    //       created_at: new Date() 
    //     }
    //   ])

    // if (error) {
    //   throw error
    // }

    // 이메일 전송 로직 (필요시 추가)
    // await sendEmail({
    //   to: 'jswon@busan.com',
    //   subject: `[아카데미 문의] ${name}님의 문의`,
    //   body: `...`
    // })

    return NextResponse.json({ 
      success: true, 
      message: '문의가 성공적으로 접수되었습니다.' 
    })
  } catch (error) {
    console.error('Contact submission error:', error)
    return NextResponse.json(
      { success: false, message: '문의 접수 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}