<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    components: {
        Pie
    },
    data() {
        return {
            chartData: {
                labels: [ 'Complete', 'Not Complete' ],
                datasets: [
                    { 
                        data: [40, 20],
                        // label: 'Label 1',
                        backgroundColor: [
                            "#0796E5",
                            "#E53935"
                        ],
                    }
                ]
            },
            chartOptions: {
                responsive:true,
                maintainAspectRatio: false,      
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                }
            }
        }
    }
}
</script>

<template>
    <div
        class="p-[16px] my-[16px] bg-white flex flex-col items-center border border-primary-border shadow-sm rounded-md">
        <div class="w-full flex justify-between items-center pb-4">
            <h1 class="font-bold text-primary-gray-4">Attendance Completeness</h1>
        </div>
        <div>
            <!-- <img src="../assets/home/graph2.png" alt=""> -->
            <Pie 
                id="chart-2"
                :options="chartOptions"
                :data="chartData"
            />
        </div>
        
    </div>
</template>
