'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Chart from 'chart.js/auto';
import { Titulo } from './Titulo';

export const Imc = () => {
    const { register, watch, handleSubmit } = useForm();
    const [bmi, setBMI] = useState(null);
    const [chart, setChart] = useState(null);

    const calculateBMI = (weight, height) => {
        const heightMeters = height / 100;
        return (weight / (heightMeters * heightMeters)).toFixed(2);
    };

    const updateChart = bmiValue => {
        const canvas = document.getElementById('bmiChart');
        const ctx = canvas.getContext('2d');

        // If a chart already exists, destroy it
        if (window.myChart instanceof Chart) {
            window.myChart.destroy();
        }

        // Create a new chart
        window.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['IMC Bajo', 'Tu IMC', 'IMC Alto'],
                datasets: [
                    {
                        label: 'IMC Bajo',
                        data: [18.5, null, null],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Tu IMC cuadrito',
                        data: [null, bmiValue, null],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'IMC Alto',
                        data: [null, null, 24.9],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white' // Cambia el color del texto de los ticks
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white' // Cambia el color del texto de los ticks
                        }
                    }
                }
            }
        });
    };

    const weight = watch("weight");
    const height = watch("height");
    const gender = watch("gender");

    useEffect(() => {
        if (weight && height) {
            const bmiValue = calculateBMI(weight, height);
            setBMI(bmiValue);
            updateChart(bmiValue);
        }
    }, [weight, height, gender]);

    useEffect(() => {
        updateChart(0);
    }, []);

    const onSubmit = data => {
        const { weight, height } = data;
        const bmiValue = calculateBMI(weight, height);
        setBMI(bmiValue);
        updateChart(bmiValue);
    };

    return (
        <div className="flex flex-wrap justify-center items-center w-full sm:w-4/5 mx-auto shadow-2xl p-4 rounded-3xl">
            <div className="w-full sm:w-1/2 p-4">
            <Titulo>
                Calculadora de IMC
            </Titulo>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
                    <label>Weight (kg)</label>
                    <input type="number" {...register("weight")} className="border border-gray-300 rounded-md p-2" />

                    <label>Height (cm)</label>
                    <input type="number" {...register("height")} className="border border-gray-300 rounded-md p-2" />

                    <input type="submit" value="Guardar Datos" className="bg-primario text-white py-2 px-4 rounded-md cursor-pointer hover:bg-secundario" />
                </form>
            </div>

            <div className="w-full sm:w-1/2 h-auto p-4 bg-gray-700 rounded-3xl">
                {bmi ? (
                    <div>
                        <h2 className="text-xl font-bold">Your BMI: {bmi}</h2>
                        {bmi >= 18.5 && bmi <= 24.9 && <p className="text-green-500">Your BMI is within the healthy range.</p>}
                        {bmi < 18.5 && <p className="text-yellow-500">Your BMI is underweight.</p>}
                        {bmi > 24.9 && <p className="text-red-500">Your BMI is overweight.</p>}
                    </div>
                ) :
                    <p className='text-white'>Introduzca los datos para ver su IMC</p>
                }

                <canvas id="bmiChart" width="100%" height="80%"></canvas>
            </div>
        </div>
    );
}