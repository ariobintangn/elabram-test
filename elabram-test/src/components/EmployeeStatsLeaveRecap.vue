<script>
export default {
    data() {
        return {
            tableHeader: [
                "Leave Code",
                "Requested On",
                "Leave Type",
                "Start Date",
                "End Date",
                "Duration",
                "Day Type"
            ],
            tableData: [
                {
                    "Leave Code": 'LV-PTES-PT-CV10435-01-23-001',
                    "Requested On": 'Mon, 02 Jan 2023',
                    "Leave Type": 'Annual Leave',
                    "Start Date": 'Tue, 03 Jan 2023',
                    "End Date": 'Tue, 03 Jan 2023',
                    "Duration": '1 Day(s)',
                    "Day Type": 'Full Day',
                },
                {
                    "Leave Code": 'LV-PTES-PT-CV10435-01-23-002',
                    "Requested On": 'Tue, 01 Jan 2023',
                    "Leave Type": 'Compassionate Leave (Imm. Family)',
                    "Start Date": 'Tue, 10 Jan 2023',
                    "End Date": 'Wed, 11 Jan 2023',
                    "Duration": '2 Day(s)',
                    "Day Type": 'Full Day',
                },
                {
                    "Leave Code": 'LV-PTES-PT-CV10435-01-23-010',
                    "Requested On": 'Mon, 02 Jan 2023',
                    "Leave Type": 'Annual Leave',
                    "Start Date": 'Tue, 03 Jan 2023',
                    "End Date": 'Tue, 03 Jan 2023',
                    "Duration": '1 Day(s)',
                    "Day Type": 'Full Day',
                },
                {
                    "Leave Code": 'LV-PTES-PT-CV10435-01-23-008',
                    "Requested On": 'Mon, 02 Jan 2023',
                    "Leave Type": 'Compassionate Leave (Imm. Family)',
                    "Start Date": 'Tue, 10 Jan 2023',
                    "End Date": 'Wed, 11 Jan 2023',
                    "Duration": '2 Day(s)',
                    "Day Type": 'Full Day',
                },
                {
                    "Leave Code": 'LV-PTES-PT-CV10435-01-23-007',
                    "Requested On": 'Mon, 02 Jan 2023',
                    "Leave Type": 'Annual Leave',
                    "Start Date": 'Tue, 03 Jan 2023',
                    "End Date": 'Tue, 03 Jan 2023',
                    "Duration": '1 Day(s)',
                    "Day Type": 'Full Day',
                },
                {
                    "Leave Code": 'LV-PTES-PT-CV10435-01-23-100',
                    "Requested On": 'Mon, 02 Jan 2023',
                    "Leave Type": 'Compassionate Leave (Imm. Family)',
                    "Start Date": 'Tue, 10 Jan 2023',
                    "End Date": 'Wed, 11 Jan 2023',
                    "Duration": '2 Day(s)',
                    "Day Type": 'Full Day',
                }
            ],
            type: 'increment'
        }
    },
    methods: {
        sortTable(header = 'Leave Code') {
            this.tableData = this.tableData.sort((a, b) => {
                if (a[header] < b[header]) {
                    return this.type === 'increment' ? -1 : 1
                } else if (a[header] > b[header]) {
                    return this.type === 'increment' ? 1 : -1
                } else {
                    return 0
                }
            })
            this.type = this.type === 'increment' ? 'decrement' : 'increment'
        }
    }
}
</script>

<template>
    <div class="p-[16px] my-[16px] bg-white flex flex-col items-center border border-primary-border shadow-sm rounded-md">
        <div class="w-full flex justify-between items-center pb-4">
            <h1 class="font-bold text-primary-gray-4">Leave Recap</h1>
        </div>
        <div class="container overflow-auto">
            <table class="w-full text-md text-left whitespace-nowrap">
                <tr class="bg-table-head font-bold">
                    <th 
                        v-for="(header, index) in tableHeader"
                        :key="index"
                        class="p-4"
                    >
                        <div class="flex gap-2 items-center justify-between">
                            {{ header }}
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" 
                                strokeWidth={1.5}
                                stroke="currentColor"
                                class="h-5 w-5 cursor-pointer"
                                @click="sortTable(header)"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" 
                                />
                            </svg>
                        </div>
                    </th>
                </tr>
                <tr 
                    v-for="(data, index) in tableData"
                    :key="index"
                    class=""
                >
                    <td
                        v-for="(header, index) in tableHeader"
                        :key="index"
                        class="px-4 py-2 text-table-data font-light text-sm"
                    >
                        {{ data[header] }}
                    </td>
                </tr>
            </table>
        </div>

    </div>
</template>
