<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    components: {
        LineChart: Line
    },
    data() {
        return {
            chartData: {
                labels: [ 'January', 'February', 'March', "April", "May", "June", "July", "August", "September", "November", "December" ],
                datasets: [
                    { 
                        data: [40, 20, 12, 10, 89, 12, 77, 11, 67, 65, 86, 10],
                        label: 'Label 1',
                        backgroundColor: 'rgba(7, 150, 229, 0.3)',
                        fill: true
                    },
                    { 
                        data: [20, 40, 22, 90, 71, 45, 23, 12, 42, 72, 65, 10],
                        label: 'Label 2',
                        backgroundColor: 'rgba(255, 152, 0, 0.3)',
                        fill: true
                    }
                ]
            },
            chartOptions: {
                responsive:true,
                maintainAspectRatio: false,      
                plugins: {
                    legend: {
                        display: false,
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
            <h1 class="font-bold text-primary-gray-4">Task Completion in All Project</h1>
        </div>
        <div class="w-full">
            <LineChart 
                id="chart-4"
                :options="chartOptions"
                :data="chartData"
            />
        </div>
        <!-- <div class="flex w-full  items-center mb-4">
            <div class="h-[12px] w-[24px] mr-2 border-2 border-primary-600 bg-primary-450 "></div>
            <div class="mr-2">Complete</div>
            <div class="h-[12px] w-[24px] mr-2 border-2 border-yellow-2 bg-yellow-1 "></div>
            <div class="mr-2">Created Task</div>
        </div>
        <div>
            <img src="../assets/home/graph4.png" class="lg:h-[291px]">
        </div> -->

        <div class="h-[134px] w-full border border-primary-border rounded-t-2xl flex flex-row text-center">
            <div class="w-1/2 border-r border-primary-border px-[21px] py-[16px]">
                <div class="flex flex-row px-[15px]">
                    <h1 class="text-xs text-primary-gray-5 mb-[14px]">Total Task Completed</h1>
                    <img src="../assets/home/info.svg" class="self-start">
                </div>
                <div class="flex flex-row px-[15px] align-middle items-center mb-[14px]">
                    <h1 class="font-bold">2400</h1>
                    <h2 class="bg-warning-green-2 text-warning-green ml-1 text-xs font-bold flex flex-row rounded-sm">20%
                        <img src="../assets/home/increase.svg" />
                    </h2>
                </div>
                <h1 class="text-xs">Last Year : 2000 Task</h1>
            </div>
            <div class="w-1/2 px-[21px] py-[16px]">
                <div class="flex flex-row px-[15px]">
                    <h1 class="text-xs text-primary-gray-5 mb-[14px]">Total Task Completed</h1>
                    <img src="../assets/home/info.svg" class="self-start">
                </div>
                <div class="flex flex-row px-[15px] align-middle items-center mb-[14px]">
                    <h1 class="font-bold">1600</h1>
                    <h2 class=" bg-red-100 text-warning-red ml-1 text-xs font-bold flex flex-row rounded-sm">20%
                        <img src="../assets/home/decrease.svg" />
                    </h2>
                </div>
                <h1 class="text-xs">Last Year : 1800 Task</h1>
            </div>
        </div>
        
        <div class="h-[134px] w-full border border-primary-border rounded-b-2xl flex flex-row text-center">
            <div class="w-1/2 border-r border-primary-border  px-[21px] py-[16px]">
                <div class="flex flex-row px-[15px]">
                    <h1 class="text-xs text-primary-gray-5 mb-[14px]">Total Task Created</h1>
                    <img src="../assets/home/info.svg" class="self-start">
                </div>
                <div class="flex flex-row px-[15px] align-middle items-center mb-[14px]">
                    <h1 class="font-bold">1600</h1>
                    <h2 class=" bg-red-100 text-warning-red ml-1 text-xs font-bold flex flex-row rounded-sm">20%
                        <img src="../assets/home/decrease.svg" />
                    </h2>
                </div>
                <h1 class="text-xs">Last Year : 1800 Task</h1>
            </div>
            <div class="w-1/2 px-[21px] py-[16px]">
                <div class="flex flex-row px-[1px]">
                    <h1 class="text-xs text-primary-gray-5 mb-[14px]">Most Completed Tasks At</h1>
                    <img src="../assets/home/info.svg" class="self-start">
                </div>
                <div class="flex flex-row px-[1px] align-middle items-center mb-[14px]">
                    <h1 class="font-bold">UI/UX Design</h1>
                </div>
                <h1 class="text-xs">Last Year : 2000 Task</h1>
            </div>
        </div>

    </div>
</template>
