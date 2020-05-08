<template>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>{{"Amount" | localize}}</th>
                <th>{{"Date" | localize}}</th>
                <th>{{"Category" | localize}}</th>
                <th>{{"Type" | localize}}</th>
                <th>{{"Open" | localize}}</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(record, index) of records" :key="record.id">
                <td>{{ index + 1}}</td>
                <td>{{record.amount | currency('UAH')}}</td>
                <td>{{record.date | dateFilter('timedate')}}</td>
                <td>{{record.categoryName}}</td>
                <td>
                    <span class="white-text badge" :class="[record.typeClass]">{{record.typeText | localize}}</span>
                </td>
                <td>
                    <button
                        v-tooltip="'OpenRecord'"
                        class="btn-small btn"
                        @click="$router.push('./detailRecord/' + record.id)">
                        <i class="material-icons">open_in_new</i>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        records: {
            reqired: true,
            type: Array
        }
    }
}
</script>