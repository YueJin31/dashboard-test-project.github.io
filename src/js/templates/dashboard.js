import Chart from "chart.js/auto";

const TEMPLATE_CLASS = ".dashboard";
const TOPICS_CHART_CLASS = ".topics-chart";
const KP_CHART_CLASS = ".kp-chart";

export const BarChart = () => {
	document.querySelectorAll(TEMPLATE_CLASS).forEach((template) => {
		const topicsChart = template.querySelector(TOPICS_CHART_CLASS);
		const kpChart = template.querySelector(KP_CHART_CLASS);

		const topicsChartData = {
			labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
			datasets: [
				{
					data: [4.75, 2, 2.5, 4.75, 1.75, 4.75, 4.75, 2, 2.5, 4.75, 1.75, 4.75],
					borderWidth: 1,
					backgroundColor: "#F18C5C",
					borderRadius: 15,
					hoverBorderColor: "#eff2f5",
					hoverBackgroundColor: "#5155C3",
					borderWidth: 8,
					borderColor: "transparent",
				},
			],
		};

		const kpChartData = {
			labels: ["KP 1", "KP 2", "KP 3", "KP 4", "KP 2"],
			datasets: [
				{
					data: [95, 77, 28, 65, 28],
					borderWidth: 1,
					backgroundColor: ["#5155C3", "#597DBE", "#5F99BB", "#65B8B7", "#6CDDB1"],
					borderRadius: 16,
					hoverBorderColor: "#eff2f5",
					hoverBackgroundColor: "#6d70cd",
					borderWidth: 8,
					borderColor: "transparent",
				},
			],
		};

		new Chart(topicsChart, {
			type: "bar",
			data: topicsChartData,
			options: {
				plugins: {
					legend: {
						display: false,
					},
					tooltip: {
						enabled: false,
					},
				},
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					x: {
						grid: {
							display: false,
						},
						border: {
							color: "#EFF2F5",
						},
						ticks: {
							color: "#616E85",
						},
					},
					y: {
						min: 1,
						max: 5,
						ticks: {
							stepSize: 1,
							color: "#616E85",
						},
						grid: {
							color: "#EFF2F5",
						},
						border: {
							display: false,
						},
					},
				},
			},
		});

		new Chart(kpChart, {
			type: "bar",
			data: kpChartData,
			options: {
				plugins: {
					legend: {
						display: false,
					},
					tooltip: {
						enabled: false,
					},
				},
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					x: {
						grid: {
							display: false,
						},
						border: {
							color: "#EFF2F5",
						},
						ticks: {
							color: "#616E85",
						},
					},
					y: {
						max: 100,
						ticks: {
							color: "#616E85",
							stepSize: 25,
							callback: function (value) {
								return value + "%";
							},
						},
						grid: {
							color: "#EFF2F5",
						},
						border: {
							display: false,
						},
					},
				},
			},
		});
	});
};
