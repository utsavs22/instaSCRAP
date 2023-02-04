import React from "react";
import { Link } from "react-router-dom";
import "./Scrapper.css";

export default function Scappers() {
  return (
    <div className="bg-[#FEFEFF] h-full mx-auto w-full xs:w-full sm:w-full md:w-3/4 lg:w-4/5 xl:w-4/5 flex flex-col pt-9">
			<div className="flex flex-row w-full">
				<div className="flex flex-col items-start">
					<h2 className="mb-2 text-2xl font-semibold">Company Analysis</h2>
					<p className="text-muted-dark-gray">
						Get rich analysis for any private or public company in just 3 steps
					</p>
				</div>
			</div>

			<div className="flex flex-row flex-wrap items-center gap-5 mb-7 mt-7 xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap">
				<Link
					to="/dashboard/workflows/company-deep-dive"
					className="w-full xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row items-center gap-8 px-6 h-[217px] border border-gray-200 shadow-md hover:shadow-lg transition-all rounded-xl shadow-gray-300/30 hover:border-purpl/50 hover:bg-purpl/10"
				>
					<img
						src="#"
						className="w-[80px] xs:w-[80px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[120px] 2xl:w-[150px] h-auto"
					/>
					<div className="flex flex-col items-start gap-4">
						<h3 className="text-xl font-semibold">Company Deep Dive</h3>
						<p className="text-sm font-medium text-gray-500">
							Deep-dive on a single company - M&A, partnerships, product
							strategy, user reviews, leadership outlook
						</p>
					</div>
				</Link>

				<Link
					to="/dashboard/workflows/peer-analysis"
					className="w-full xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row items-center gap-8 px-6 h-[217px] border border-gray-200 shadow-md hover:shadow-lg transition-all rounded-xl hover:border-purpl/50 hover:bg-purpl/10 shadow-gray-300/30"
				>
					<img
						src="#"
						className="w-[80px] xs:w-[80px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[120px] 2xl:w-[150px] h-auto"
					/>
					<div className="flex flex-col items-start gap-4">
						<h3 className="text-xl font-semibold">Peer Analysis</h3>
						<p className="text-sm font-medium text-gray-500">
							Compare multiple companies - Extract info related to
							products, business model, strategy, financials
						</p>
					</div>
				</Link>
			</div>

			<div className="flex flex-row w-full">
				<div className="flex flex-col items-start">
					<h2 className="mb-2 text-2xl font-semibold">Sector Analysis</h2>
					<p className="text-muted-dark-gray">
						Generate fact-based market research reports for any topic
					</p>
				</div>
			</div>

			<div className="flex flex-row flex-wrap items-center gap-5 mt-7 xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap">
				<Link
					to="/dashboard/workflows/market-snapshot"
					className="w-full xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row items-center gap-8 px-6 h-[217px] border border-gray-200 shadow-md hover:shadow-lg transition-all rounded-xl shadow-gray-300/30 hover:border-purpl/50 hover:bg-purpl/10"
				>
					<img
						src="#"
						className="w-[80px] xs:w-[80px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[120px] 2xl:w-[150px] h-auto"
					/>
					<div className="flex flex-col items-start gap-4">
						<h3 className="text-xl font-semibold">Sector Snapshot</h3>
						<p className="text-sm font-medium text-gray-500">
							Instant report for any industry, tech or concept. Covers
							overview, size, drivers, value chain, key players,
							start-ups
						</p>
					</div>
				</Link>

				<Link
					to="/dashboard"
					className="relative w-full xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row items-center gap-8 px-6 h-[217px] border border-gray-200 shadow-md hover:shadow-lg transition-all rounded-xl shadow-gray-300/30 hover:border-purpl/50 hover:bg-purpl/10"
				>
					<img
						src="#"
						className="w-[80px] xs:w-[80px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[120px] 2xl:w-[150px] h-auto"
					/>
					<div className="flex flex-col items-start gap-4">
						<h3 className="text-xl font-semibold">Signals & Trends</h3>
						<p className="text-sm font-medium text-gray-500">
							Covers trends, strategic moves, consumer behavior, outlook,
							thought leadership, analyst commentary
						</p>
					</div>

					<span className="absolute px-2 py-1 text-xs font-semibold rounded-full top-2 right-2 bg-purpl/10 text-purpl">
						Coming Soon
					</span>
				</Link>
			</div>
		</div>
  );
}
