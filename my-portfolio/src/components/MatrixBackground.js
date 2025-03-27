import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions to match window size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Call once and add event listener
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Characters to display (you can customize this)
        const chars = '01';
        const charArray = chars.split('');

        // Array to store column positions and their speeds
        const columns = [];
        // Reduce the density by increasing the spacing between columns
        const columnSpacing = 15; // Increased from 20 to remove vertical lines effect
        const columnCount = Math.floor(canvas.width / columnSpacing);

        // Initialize columns
        for (let i = 0; i < columnCount; i++) {
            // Randomize x position slightly to avoid grid-like appearance
            const xPos = i * columnSpacing + (Math.random() * 10 - 5);
            
            columns[i] = {
                x: xPos,
                y: Math.random() * -500, // Start above the canvas at random positions
                speed: 1 + Math.random() * 1, // Random speed
                length: 10 + Math.random() * 30, // Random length of trail
                chars: [] // Will hold characters for this column
            };

            // Initialize characters for this column
            for (let j = 0; j < columns[i].length; j++) {
                columns[i].chars[j] = charArray[Math.floor(Math.random() * charArray.length)];
            }
        }

        // Periodically change some characters to create animation effect
        const changeCharsInterval = setInterval(() => {
            columns.forEach(column => {
                const randomIndex = Math.floor(Math.random() * column.chars.length);
                column.chars[randomIndex] = charArray[Math.floor(Math.random() * charArray.length)];
            });
        }, 20);

        // Animation function
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Add a very slight fade effect (much more subtle than before)
            ctx.fillStyle = 'rgba(30, 30, 30, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Set text style
            ctx.font = '30px VT323, monospace'; // Using VT323 font from your CSS

            // Draw each column
            columns.forEach((column, i) => {
                // Move column down
                column.y += column.speed;

                // If column is off-screen, reset it
                if (column.y > canvas.height + column.length * 20) {
                    column.y = Math.random() * -500;
                    column.speed = 1 + Math.random() * 1;
                }

                // Draw each character in the column
                for (let j = 0; j < column.chars.length; j++) {
                    const y = column.y - j * 20;

                    // Skip if character is above canvas
                    if (y < 0) continue;
                    const alpha = j === 0 ? 1 : Math.max(0, 0.7 - (j / column.chars.length) * 1.5);

                    // Use VSCode colors for a coding theme with reduced opacity
                    if (j === 0) {
                        ctx.fillStyle = `rgba(79, 193, 255, 1)`; // Bright blue (#4FC1FF) for the head
                    } else if (j < 2) { // Reduced tail length
                        ctx.fillStyle = `rgba(156, 220, 254, ${alpha * 0.8})`; // Light blue with reduced opacity
                    } else {
                        // Make the rest of the tail very faint
                        ctx.fillStyle = `rgba(86, 156, 214, ${alpha * 0.6})`;
                    }

                    // Draw character
                    ctx.fillText(column.chars[j], column.x, y);
                }
            });

            // Loop the animation
            requestAnimationFrame(draw);
        };

        // Start the animation
        const animationFrame = requestAnimationFrame(draw);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrame);
            clearInterval(changeCharsInterval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // Behind other content
                pointerEvents: 'none' // Don't interfere with clicks
            }}
        />
    );
};

export default MatrixBackground;