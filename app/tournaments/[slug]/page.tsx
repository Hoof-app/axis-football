import AxisDetailPage, {
  AxisDetailData,
} from "@/../components/AxisDetailPage";
import { getTournamentBySlug } from "@/../lib/data";

interface Params {
  params: { slug: string };
}

export default function TournamentDetailPage({ params }: Params) {
  const data = getTournamentBySlug(params.slug) as AxisDetailData;

  // Ensure type field for labeling
  data.type = "tournament";

  return <AxisDetailPage data={data} />;
}


