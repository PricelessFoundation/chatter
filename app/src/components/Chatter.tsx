import { Box, Grid, Paper } from "@mui/material";
import React from "react";

import ChatBox from "../components/ChatBox";
import ConversationsList from "../components/ConversationsList";
import MessagesList from "../components/MessagesList";
import useConversationId from "../lib/graph/local/conversationId";

const Chatter = () => {
  const { conversationId } = useConversationId();

  return (
    <Grid container>
      <Grid item xs={4} md={3} xl={2}>
        <Paper variant="outlined" square sx={{ ml: "-1px" }}>
          <ConversationsList />
        </Paper>
      </Grid>
      <Grid item xs={8} md={9} xl={10} padding={2}>
        {conversationId === "" ? (
          <Box>Pls select a conversation.</Box>
        ) : (
          <Box>
            <MessagesList conversationId={conversationId} />
            <ChatBox conversationId={conversationId} />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Chatter;