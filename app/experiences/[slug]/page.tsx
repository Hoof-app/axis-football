"use client";

import AxisDetailPage, {
  AxisDetailData,
} from "@/../components/AxisDetailPage";
import { getExperienceBySlug } from "@/../lib/data";

interface Params {
  params: { slug: string };
}

export default function ExperienceDetailPage({ params }: Params) {
  const data = getExperienceBySlug(params.slug) as AxisDetailData | undefined;

  if (!data) {
    throw new Error(`Experience not found for slug: ${params.slug}`);
  }

  data.type = "experiences";

  return <AxisDetailPage data={data} />;
}