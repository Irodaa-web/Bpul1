import { notFound } from 'next/navigation';
import Dashboard from '@/components/Dashboard';
export default async function ChildSection({ params }) {
  const { section } = await params;
  if (!['tasks', 'goals', 'wallet', 'notifications', 'learn', 'settings'].includes(section)) notFound();
  return <Dashboard role="child" section={section} />;
}
