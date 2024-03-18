'use client'
import React, { useState } from 'react'

export default function BlogListCard() {
    const [appendText, setAppendText] = useState<Boolean>(false)
    return (
        <div>
            <p className="pt-12 mb-3 text-sm font-normal text-gray-500">
                April 16, 2020
            </p>
            <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-100 md:text-3xl">
                <a href="#" className="text-gray-100 hover:text-yellow-500">
                    Process Documents Using Artificial Intelligence For RPA Bots
                </a>
            </h2>
            <p className={`text-justify mb-4 text-base font-normal text-white ${!appendText && 'line-clamp-3'}`}>
                Once upon a time, nestled between the towering mountains and the whispering streams, there lay a mysterious forest. It was said that within its depths, secrets older than time itself were guarded by ancient trees and elusive creatures. Few dared to venture into its heart, but for those who did, it was a journey of discovery unlike any other. Our story begins with a young adventurer named Ella, whose curiosity burned brighter than the sun. Ever since she was a child, she had dreamed of exploring the fabled Enchanted Forest, and now, with her trusty map in hand, she set out to make her dream a reality. As she stepped into the forest, she was immediately enveloped by the sweet scent of wildflowers and the gentle rustle of leaves. The sunlight filtered through the canopy above, casting dappled shadows on the forest floor. With each step, Ella felt as though she was stepping into another world, a world filled with magic and wonder. As she ventured deeper into the forest, Ella encountered all manner of strange and wondrous sights. She stumbled upon a clearing where fairies danced in the moonlight, their laughter echoing through the trees. She marveled at the sight of luminous mushrooms that glowed like lanterns in the dark. And she gasped in awe as she caught a glimpse of a majestic unicorn drinking from a crystal-clear stream. But it was not just the sights that captivated Ella—it was the stories she uncovered along the way. She met wise old owls who shared tales of the forest's history, of battles fought and victories won. She listened to the songs of the forest spirits, their haunting melodies weaving tales of love and loss. As the days turned into weeks, Ella felt herself becoming a part of the forest, her spirit intertwined with its ancient magic. She learned to speak the language of the trees, to read the whispers of the wind. And with each passing day, she discovered more about herself and the world around her. Eventually, as all journeys must, Ella's time in the Enchanted Forest came to an end. But though she returned to the world beyond its borders, she carried with her the memories of her adventure, the lessons she had learned, and the magic she had experienced. And as she looked back on her journey, Ella knew that the Enchanted Forest would always hold a special place in her heart—a place of mystery, of beauty, and of endless possibility. For in that enchanted realm, she had discovered the true meaning of adventure: not just the thrill of discovery, but the joy of being truly alive.
            </p>
            <button className="btn btn-light btn-sm"
                onClick={() => setAppendText(prev => !prev)}
            >
                {appendText ? 'Less Reading' : 'Continue Reading'}
            </button>
        </div>
    )
}
