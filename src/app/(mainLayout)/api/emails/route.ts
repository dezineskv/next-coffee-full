import EmailModel from '@/models/EmailModel';
import ConnectDB from '@/lib/db';
import { NextResponse } from 'next/server';

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

//subscribe an email address from form submit
export async function POST(request: Request) {
  const formData = await request.formData();

  const emailData = {
    email: `${formData.get('email')}`,
  };

  //save to db using model
  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: 'Email subscribed' });
}

//get emails
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // const formData = await request.formData();

  const emails = await EmailModel.find({});
  //   return NextResponse.json({ msg: "api working" });
  return NextResponse.json({ emails });
}

//delete email

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({ success: true, msg: 'Email deleted' });
}
