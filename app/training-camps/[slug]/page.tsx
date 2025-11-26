"use client";

import AxisDetailPage, {
  AxisDetailData,
} from "@/../components/AxisDetailPage";
import { getTrainingCampBySlug } from "@/../lib/data";

interface Params {
  params: { slug: string };
}

export default function TrainingCampDetailPage({ params }: Params) {
  const data = getTrainingCampBySlug(params.slug) as AxisDetailData;
  data.type = "trainingCamp";

  return <AxisDetailPage data={data} />;
}
