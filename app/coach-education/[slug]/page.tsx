import AxisDetailPage, {
  AxisDetailData,
} from "@/../components/AxisDetailPage";
import { getCoachEdBySlug } from "@/../lib/data";

interface Params {
  params: { slug: string };
}

export default function CoachEducationDetailPage({ params }: Params) {
  const data = getCoachEdBySlug(params.slug) as AxisDetailData;
  data.type = "coachEducation";

  return <AxisDetailPage data={data} />;
}
