import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const projects = [
 {
 title: "Website Portfolio",
 description: "Website cá nhân xây dựng bằng Next.JS và Tailwind CSS",
 tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
 status: "Đang phát triển",
 },
 {
 title: "Ứng dụng Quản lý Công việc",
 description: "Ứng dụng Todo App với React và Local Storage",
 tech: ["React", "CSS Modules", "JavaScript"],
 status: "Hoàn thành",
 },
 {title: "API RESTful",
 description: "API quản lý sản phẩm với Node.js và Express",
 tech: ["Node.js", "Express", "MongoDB"],
 status: "Hoàn thành",
 },
 {
 title: "Chat Realtime",
 description: "Ứng dụng chat realtime với Socket.IO",
 tech: ["React", "Socket.IO", "Node.js"],
 status: "Đang phát triển",
 },
];
export default function ProjectsPage() {
 return (
 <div className="space-y-6">
 <section className="panel reveal p-6 md:p-8">
 <h1 className="section-title">Dự án</h1>
 <p className="section-subtitle">
 Một số dự án nổi bật mình đã thực hiện trong quá trình học và luyện tập.
 </p>
 </section>
 <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
 {projects.map((project, index) => (
 <Card key={index} className="elevate reveal p-1">
 <CardHeader>
 <div className="flex items-center justify-between">
 <CardTitle className="text-lg">{project.title}</CardTitle>
 <Badge
 variant={project.status === "Hoàn thành" ? "default" : "secondary"}
 className={
 project.status === "Hoàn thành"
 ? "bg-[color:var(--accent)]"
 : "bg-[color:rgba(244,162,97,0.25)] text-[color:#8a4f18]"
 }
 >
 {project.status}
 </Badge>
 </div>
 <CardDescription>{project.description}</CardDescription>
 </CardHeader>
 <CardContent>
 <div className="flex flex-wrap gap-2">
 {project.tech.map((t) => (
 <Badge key={t} variant="outline" className="bg-white/70">
 {t}
 </Badge>
 ))}
 </div>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 );
}