import { Types } from 'mongoose';
import connectDB from '../lib/db';
import Profile, {IProfile} from '@/models/Profiles'; 

export async function getProfileById(id: string) {
  try {
    await connectDB();
    console.log('[getProfileById] lookup id:', id);

    let profile: any = null;

    // 1) try findById (works for ObjectId strings)
    if (Types.ObjectId.isValid(id)) {
      profile = await Profile.findById(id).lean();
      console.log('[getProfileById] findById hit:', !!profile);
    }

    // 2) fallback: exact _id match (for string _id schemas)
    if (!profile) {
      profile = await Profile.findOne({ _id: id }).lean();
      console.log('[getProfileById] findOne by _id hit:', !!profile);
    }

    // 3) extra fallback: maybe route passed email instead of id
    if (!profile) {
      profile = await Profile.findOne({ email: id }).lean();
      console.log('[getProfileById] findOne by email hit:', !!profile);
    }

    if (!profile) {
      console.log('[getProfileById] profile not found for id:', id);
      return null;
    }

    const { password: _, ...safe } = profile as any;
    return safe;
  } catch (err) {
    console.error('[getProfileById] error:', err);
    return null;
  }
}