import { NextResponse } from 'next/server';

const GITHUB_CLIENT_ID = process.env.OAUTH_GITHUB_CLIENT_ID;

export async function GET() {
    if (!GITHUB_CLIENT_ID) {
        return NextResponse.json({ error: 'OAuth not configured' }, { status: 500 });
    }

    const authUrl = new URL('https://github.com/login/oauth/authorize');
    authUrl.searchParams.set('client_id', GITHUB_CLIENT_ID);
    authUrl.searchParams.set('scope', 'repo,user');

    return NextResponse.redirect(authUrl.toString());
}
