import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';
import { FaUsers } from "react-icons/fa"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
import { PieChart, Pie } from 'recharts';

// const pieChartdata = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
// ];

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxios()

    const { data: adminData = {} } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin-stats`)
            return res.data
        }
    })
    const { data: chartData = [] } = useQuery({
        queryKey: ["order-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/order-stats`)
            return res.data
        }
    })
    // pie chart data
    const pieChartData = chartData.map(items => {
        return { name: items.category, value: items.revenue }
    })
    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    // for pie chart

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <main>
            <div className="container mx-auto">
                <h2>Hi, Welcome Back <span className='text-primary font-semibold'>{user?.displayName && user.displayName}</span></h2>
                <div className="mt-10">
                    <div className="stats stats-vertical lg:stats-horizontal shadow justify-between w-full items-center">

                        <div className="stat flex items-center justify-center gap-5">
                            <FaUsers className='text-secondary' size={50} />
                            <div>
                                <div className="stat-value">${adminData?.revenue}</div>
                                <div className="stat-title text-xl font-semibold">Revinue</div>
                            </div>
                        </div>

                        <div className="stat flex items-center justify-center gap-5">
                            <FaUsers className='text-secondary' size={50} />
                            <div>
                                <div className="stat-value">{adminData?.user}</div>
                                <div className="stat-title text-xl semibold-bold">Customers</div>
                            </div>
                        </div>

                        <div className="stat flex items-center justify-center gap-5">
                            <FaUsers className='text-secondary' size={50} />
                            <div>
                                <div className="stat-value">{adminData?.menuItems}</div>
                                <div className="stat-title text-xl semibold-bold">Items</div>
                            </div>
                        </div>
                        <div className="stat flex items-center justify-center gap-5">
                            <FaUsers className='text-secondary' size={50} />
                            <div>
                                <div className="stat-value">{adminData?.orders}</div>
                                <div className="stat-title text-xl semibold-bold">Orders</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex gap-5 items-center">
                    <div className='md:1/2'>
                        <BarChart
                            width={500}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Category" />
                            <YAxis />
                            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </div>
                    <div className='md:1/2'>
                        <PieChart width={400} height={400}>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData?.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                </div>
            </div>
        </main >
    );
};
export default AdminHome;