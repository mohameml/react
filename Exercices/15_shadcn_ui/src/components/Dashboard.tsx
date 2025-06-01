"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@/components/ui/dialog";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { toast } from "sonner"; // ← Utilisation de Sonner

export default function Dashboard() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		toast.success("Connexion réussie", {
			description: `Bienvenue, ${email}`,
		});
	};

	const users = [
		{ name: "Alice", role: "Admin" },
		{ name: "Bob", role: "User" },
		{ name: "Charlie", role: "Viewer" },
	];

	return (
		<div className="max-w-2xl mx-auto mt-20 space-y-10">
			{/* Formulaire de login */}
			<div className="space-y-4 p-6 border rounded-xl shadow-sm">
				<h2 className="text-xl font-semibold">Connexion</h2>
				<Input
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder="Mot de passe"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button className="w-full" onClick={handleLogin}>
					Se connecter
				</Button>
			</div>

			{/* Table des utilisateurs */}
			<div className="p-6 border rounded-xl shadow-sm">
				<h2 className="text-xl font-semibold mb-4">Utilisateurs</h2>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Nom</TableHead>
							<TableHead>Rôle</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map((user, idx) => (
							<TableRow key={idx}>
								<TableCell>{user.name}</TableCell>
								<TableCell>{user.role}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			{/* Dialog (Modal) */}
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="outline">Ouvrir la modal</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Modal d'information</DialogTitle>
					</DialogHeader>
					<p>Bienvenue dans cette superbe UI sans CSS 🎉</p>
					<DialogFooter>
						<Button>Fermer</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
