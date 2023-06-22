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
                    "Leave Code": 'LV-PTES-PT-CV10435-01-23-001',
                    "Requested On": 'Mon, 02 Jan 2023',
                    "Leave Type": 'Compassionate Leave (Imm. Family)',
                    "Start Date": 'Tue, 10 Jan 2023',
                    "End Date": 'Wed, 11 Jan 2023',
                    "Duration": '2 Day(s)',
                    "Day Type": 'Full Day',
                },
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
                    "Leave Code": 'LV-PTES-PT-CV10435-01-23-001',
                    "Requested On": 'Mon, 02 Jan 2023',
                    "Leave Type": 'Compassionate Leave (Imm. Family)',
                    "Start Date": 'Tue, 10 Jan 2023',
                    "End Date": 'Wed, 11 Jan 2023',
                    "Duration": '2 Day(s)',
                    "Day Type": 'Full Day',
                },
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
                    "Leave Code": 'LV-PTES-PT-CV10435-01-23-001',
                    "Requested On": 'Mon, 02 Jan 2023',
                    "Leave Type": 'Compassionate Leave (Imm. Family)',
                    "Start Date": 'Tue, 10 Jan 2023',
                    "End Date": 'Wed, 11 Jan 2023',
                    "Duration": '2 Day(s)',
                    "Day Type": 'Full Day',
                }
            ]
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
                    {{ header }}
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
