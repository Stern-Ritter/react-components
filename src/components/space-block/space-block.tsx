import React from 'react';

type SpaceBlockType = {
  blockHeight: number;
  separatorHeight: number;
  separatorColor: string;
};

function SpaceBlock({
  blockHeight,
  separatorHeight,
  separatorColor,
}: SpaceBlockType) {
  return (
    <div
      data-testid="space"
      style={{
        height: `${blockHeight / 2}px`,
        borderBottom: `${separatorHeight}px solid ${separatorColor}`,
        marginBottom: `${blockHeight / 2}px`,
      }}
    ></div>
  );
}

export default SpaceBlock;
