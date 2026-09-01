import {
  Leaf,
  Nut,
  Fish,
  Wheat,
  Flame,
  Apple,
  Citrus,
  CircleDot,
  Sun,
  Waves,
  Bean,
  Coffee,
  Sprout,
  Shield,
  FlaskConical,
  Snowflake,
  Ship,
  BadgeCheck,
  FileBadge,
  Receipt,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  leaf: Leaf,
  nut: Nut,
  fish: Fish,
  wheat: Wheat,
  flame: Flame,
  pinecone: Apple,
  citrus: Citrus,
  seed: CircleDot,
  sunflower: Sun,
  waves: Waves,
  bean: Bean,
  coffee: Coffee,
  sprout: Sprout,
  shield: Shield,
  flask: FlaskConical,
  snowflake: Snowflake,
  ship: Ship,
  badge: BadgeCheck,
  file: FileBadge,
  receipt: Receipt,
  check: CheckCircle2,
};

export function CommodityIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Leaf;
  return <Icon className={className} />;
}
