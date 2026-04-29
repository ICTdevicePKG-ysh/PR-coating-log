// ============================================
// Supabase 연결 설정 (배포 가능 버전)
// ============================================
// ⚠️ 본인 키로 바꿔주세요!

const SUPABASE_URL = 'https://hxerglsniwxyozebjyyt.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_lU1SMdDTdTludrMdU5wCZg_rg6Hwc_p';

// 관리자 페이지 PIN (4자리 숫자)
// ⚠️ 이 값은 인터넷에 노출되니 너무 단순한 숫자는 피하세요
const ADMIN_PIN_HASH = '46437ab18a6657040b4535297ff247b20c535c02263713f88b6a9e17484f1f3f';

// SECRET_KEY는 더 이상 사용하지 않습니다 (브라우저에서 사용 금지)
// 모든 권한은 RLS와 GRANT로 통제됩니다.