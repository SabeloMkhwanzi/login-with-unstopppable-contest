import { Player } from "@livepeer/react";
import { Container, createStyles } from "@mantine/core";

const playbackId =
  "ipfs://bafybeidmobf7lbc7vqo6t7kini7zf33zs2ffebtsbad27tgisngdvqu67m";

const useStyles = createStyles((theme) => ({
  Paper: {
    boxShadow: theme.shadows.lg,
  },
}));

export default function HeroVideo() {
  const { classes } = useStyles();
  return (
    <Container size="xl" px={8} my="5em" className={classes.Paper}>
      <Player
        autoPlay
        loop
        title="BubbleStreaamr Ad"
        playbackId={playbackId}
        showPipButton
        showTitle={false}
        aspectRatio="16to9"
        controls={{
          autohide: 100000,
        }}
        theme={{
          borderStyles: { containerBorderStyle: "hidden" },
          radii: { containerBorderRadius: "10px" },
        }}
      />
    </Container>
  );
}
