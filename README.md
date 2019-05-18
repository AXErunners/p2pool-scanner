p2pool-scanner
==============
[![NPM version](https://img.shields.io/npm/v/@axerunners/p2pool-scanner.svg)](https://npmjs.org/package/@axerunners/p2pool-scanner)

A simple NodeJS scanner that runs beside p2pool node and scans all IPs stored in `addrs` file. If IP has a public interface, then it is added to the list.  Users can connect to these nodes to mine on p2pool network without having to setup their own p2pool node.

If HTTP port is provided in the configuration file, this application will publish the list on the given HTTP port.  Alternatively, it can be configured to upload page rendering to a destination FTP address to copy it to another host via SCP.

#### Configuration

Insert your [API](https://ipstack.com) key in the `.env` file.
